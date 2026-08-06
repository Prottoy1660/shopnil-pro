import { NextResponse } from 'next/server';
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '@/sanity/env';
import { portfolioItems } from '@/data/portfolio';
import { resumeItems } from '@/data/experiences';
import { educationResumeItems } from '@/data/education';
import { skillSections } from '@/data/skills';
import { testimonials2 } from '@/data/testimonials';
import { certificationData } from '@/data/certifications';
import { footerLinks } from '@/data/footerLinks';
import { websiteProjects, funProjects } from '@/data/works';
import { counters2 } from '@/data/facts';
import fs from 'fs';
import path from 'path';

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token: process.env.SANITY_API_TOKEN,
});

// Helper to upload image
async function uploadImage(imagePath) {
    if (!imagePath) return null;
    console.log(`Starting upload for: ${imagePath}`);

    try {
        const publicDir = path.join(process.cwd(), 'public');
    const fullPath = path.join(publicDir, imagePath);
    
    if (!fs.existsSync(fullPath)) {
      console.warn(`Image not found: ${fullPath}`);
      return null;
    }

    const fileBuffer = fs.readFileSync(fullPath);
    const asset = await client.assets.upload('image', fileBuffer, {
      filename: path.basename(imagePath)
    });
    console.log(`Finished upload for: ${imagePath}`);
    
    return {
      _type: 'image',
      asset: {
        _type: "reference",
        _ref: asset._id
      }
    };
  } catch (error) {
    console.error(`Failed to upload image ${imagePath}:`, error);
    return null;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  
  if (secret !== 'my_super_secret_seed_key') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // 0. Clean up existing data
    console.log('Cleaning up existing data...');
    const typesToClean = [
      'experience', 'education', 'skillSection', 'testimonial', 
      'certification', 'project', 'hero', 'about', 'trustedBy', 'settings'
    ];
    
    for (const type of typesToClean) {
        const documents = await client.fetch(`*[_type == "${type}"]{_id}`);
        if (documents.length > 0) {
            console.log(`Deleting ${documents.length} documents of type ${type}...`);
            const transaction = client.transaction();
            documents.forEach(doc => transaction.delete(doc._id));
            await transaction.commit();
        }
    }
    
    // 1. Seed Experiences
    console.log('Seeding Experiences...');
    for (let i = 0; i < resumeItems.length; i++) {
        const item = resumeItems[i];
        const logo = await uploadImage(item.logo);
        
        await client.create({
            _type: 'experience',
            title: item.title,
            institute: item.institute,
            duration: item.duration,
            logo: logo,
            order: i
        });
    }

    // 2. Seed Education
    console.log('Seeding Education...');
    for (let i = 0; i < educationResumeItems.length; i++) {
        const item = educationResumeItems[i];
        
        await client.create({
            _type: 'education',
            title: item.title,
            institute: item.institute,
            duration: item.duration,
            order: i
        });
    }

    // 3. Seed Skills
    console.log('Seeding Skills...');
    for (let i = 0; i < skillSections.length; i++) {
        const section = skillSections[i];
        
        await client.create({
            _type: 'skillSection',
            title: section.title,
            subtitle: section.subtitle,
            order: i,
            skills: section.skills.map(skill => ({
                _key: skill.name,
                name: skill.name,
                percent: skill.percent,
                years: skill.years,
                duration: skill.duration,
                delay: skill.delay
            }))
        });
    }

    // 4. Seed Testimonials
    console.log('Seeding Testimonials...');
    for (let i = 0; i < testimonials2.length; i++) {
        const item = testimonials2[i];
        const image = await uploadImage(item.image);
        
        await client.create({
            _type: 'testimonial',
            name: item.name,
            role: item.role,
            text: item.text,
            stars: item.stars,
            image: image,
            order: i
        });
    }

    // 5. Seed Certifications
    console.log('Seeding Certifications...');
    for (let i = 0; i < certificationData.length; i++) {
        const item = certificationData[i];
        
        await client.create({
            _type: 'certification',
            title: item.title,
            issuer: item.issuer,
            date: item.date,
            description: item.description,
            order: i
        });
    }

    // 6. Seed Projects (Case Studies)
    console.log('Seeding Projects (Case Studies)...');
    for (const item of portfolioItems) {
        console.log(`Processing project: ${item.title} (ID: ${item.id})`);
        const mainImage = await uploadImage(item.imageSrc);
        
        // Add "Case Study" to categories if not present
        const categories = [...(item.categories || [])];
        if (!categories.includes("Case Study")) {
          categories.push("Case Study");
        }

        // Process sections images
        const processedSections = [];
        if (item.sections) {
            for (const section of item.sections) {
                const sectionImage = await uploadImage(section.image);
                const galleryImages = [];
                
                if (section.images) {
                    for (const imgPath of section.images) {
                        const img = await uploadImage(imgPath);
                        if (img) galleryImages.push({ ...img, _key: imgPath });
                    }
                }

                processedSections.push({
                    _key: section.title || Math.random().toString(36).substring(7),
                    title: section.title,
                    content: Array.isArray(section.content) 
                        ? section.content.flatMap(c => {
                            const blocks = [];
                            if (typeof c === 'string') {
                                blocks.push({ 
                                    _type: 'block', 
                                    _key: Math.random().toString(36).substring(7),
                                    children: [{ _type: 'span', text: c }] 
                                });
                            } else if (typeof c === 'object') {
                                // Add mainPoint as a normal block (if it has meaningful text)
                                // We check if it contains actual text, not just markdown bold markers with no text like "****"
                                const cleanMainPoint = c.mainPoint ? c.mainPoint.replace(/\*/g, '').trim() : '';
                                if (cleanMainPoint.length > 0) {
                                     blocks.push({ 
                                        _type: 'block', 
                                        _key: Math.random().toString(36).substring(7),
                                        style: 'normal',
                                        children: [{ _type: 'span', text: c.mainPoint }] 
                                    });
                                }
                                
                                // Add subPoints as list items
                                if (c.subPoints && Array.isArray(c.subPoints)) {
                                    c.subPoints.forEach(point => {
                                        blocks.push({
                                            _type: 'block',
                                            _key: Math.random().toString(36).substring(7),
                                            listItem: 'bullet',
                                            level: 1,
                                            children: [{ _type: 'span', text: point }]
                                        });
                                    });
                                }
                            }
                            return blocks;
                        })
                        : [{ 
                            _type: 'block', 
                            _key: Math.random().toString(36).substring(7),
                            children: [{ _type: 'span', text: section.content }] 
                          }],
                    image: sectionImage,
                    imagePosition: section.imagePosition,
                    images: galleryImages.length > 0 ? galleryImages : undefined,
                    videoUrl: section.videoUrl,
                    videoPosition: section.videoPosition,
                    titleFontSize: section.titleFontSize,
                    titleFontWeight: section.titleFontWeight
                });
            }
        }
        
        // Process project gallery images if any
        const projectGalleryImages = [];
        if (item.galleryImages) {
             for (const gImg of item.galleryImages) {
                 const img = await uploadImage(gImg.src);
                 if (img) projectGalleryImages.push({ ...img, _key: gImg.src });
             }
        }

        await client.create({
            _type: 'project',
            title: item.title,
            slug: { _type: 'slug', current: item.id.toString() }, // Keep ID as slug for existing routing
            allOrder: item.allOrder,
            showInAll: item.showInAll,
            image: mainImage,
            description: item.description,
            author: item.author,
            date: item.date,
            tags: item.tags,
            categories: categories,
            details: item.details?.map(d => ({
                _key: d.label,
                label: d.label,
                value: Array.isArray(d.value) ? d.value : undefined,
                valueString: typeof d.value === 'string' ? d.value : undefined
            })),
            figmaUrl: item.figmaUrl,
            liveUrl: item.liveUrl,
            summary: item.summary,
            sections: processedSections,
            galleryImages: projectGalleryImages.length > 0 ? projectGalleryImages : undefined
        });
    }

    // 7. Seed Website Projects
    console.log('Seeding Website Projects...');
    for (const item of websiteProjects) {
        // Check if a project with this title already exists (from Case Studies)
        const existing = await client.fetch(`*[_type == "project" && title == $title][0]`, { title: item.title });
        
        if (existing) {
            console.log(`Skipping duplicate Website Project: ${item.title}`);
            // Add "Website Project" category to existing project if not present
            const currentCategories = existing.categories || [];
            if (!currentCategories.includes("Website Project")) {
                await client.patch(existing._id)
                    .set({ categories: [...currentCategories, "Website Project"] })
                    .commit();
                console.log(`Added "Website Project" category to existing project: ${item.title}`);
            }
            // Update liveUrl if missing
            if (!existing.liveUrl && item.liveUrl) {
                await client.patch(existing._id)
                    .set({ liveUrl: item.liveUrl })
                    .commit();
            }
            continue;
        }

        const mainImage = await uploadImage(item.imageSrc);
        const categories = ["Website Project", ...(item.tags || [])];

        await client.create({
            _type: 'project',
            title: item.title,
            slug: { _type: 'slug', current: item.slug },
            image: mainImage,
            description: item.description,
            tags: item.tags,
            categories: categories,
            liveUrl: item.liveUrl,
            width: item.width,
            height: item.height
        });
    }

    // 8. Seed Fun Projects
    console.log('Seeding Fun Projects...');
    for (const item of funProjects) {
        const mainImage = await uploadImage(item.imageSrc);
        const categories = ["Fun Project", ...(item.tags || [])];

        await client.create({
            _type: 'project',
            title: item.title,
            slug: { _type: 'slug', current: item.slug },
            image: mainImage,
            description: item.description,
            tags: item.tags,
            categories: categories,
            liveUrl: item.liveUrl,
            width: item.width,
            height: item.height,
            detailedContent: item.detailedContent
        });
    }

    // 9. Seed Hero
    console.log('Seeding Hero...');
    const profileImage = await uploadImage("/assets/images/banner/Profile.png");
    await client.create({
        _type: 'hero',
        title: "I'm a Sr. Product designer",
        typerStrings: ["SaaS, B2B, B2C", "Health & Fintech", "Creative Storyteller"],
        stats: counters2.map((c, i) => ({
            _key: c.animationOrder?.toString() || i.toString(),
            count: c.count,
            suffix: c.suffix,
            text: c.text,
            animationOrder: c.animationOrder
        })),
        workedWithTitle: "Worked with",
        workedWithText: "At BMO, I spearheaded UX for an AI fraud detection platform that slashed investigation time by 40% and prevented millions in losses.\n\nAt Dynacare, I reduced test result delivery time by 2 days with AI Tool.\n\nAt Augmedix, I contributed to documentation tools that empower clinicians with up to 3 hours of daily time savings, 20% productivity boost, and 40% higher work-life satisfaction.",
        locationTitle: "I'm a Torontonian",
        locationText: "shopnilmahamud@outlook.com",
        profileImage: profileImage
    });

    // 10. Seed About
    console.log('Seeding About...');
    await client.create({
        _type: 'about',
        yearsExperience: 12,
        projectCount: "90+",
        title: "I design software that's simple to use and helps businesses achieve their goals.",
        description: "I excel in high-stakes, regulated environments-translating complex business needs into elegant, user-centred experiences through rapid prototyping, cross-functional alignment, and thoughtful documentation.",
        missionStatement: "Decade of experience translating complex business challenges across fintech, healthcare, eCommerce, and marketing domains.",
        cards: [
            {
                _key: "uiux",
                title: "UI/UX Design",
                description: "Creating intuitive and engaging user experiences that drive results",
                // Note: Icons are static assets, might need to upload or just keep static path string if schema allows
                // About schema likely expects image for icon if updated, or string? 
                // Let's assume string for now or skip icon upload if it's SVG
            },
            {
                _key: "proddev",
                title: "Product Development",
                description: "Building innovative solutions from concept to deployment"
            }
        ]
    });

    // 11. Seed TrustedBy
    console.log('Seeding TrustedBy...');
    const trustedCompanies = [
        { name: "", logo: "/assets/images/trusted-by/Adplist.png" },
        { name: "", logo: "/assets/images/trusted-by/ADP-Tor.png" },
        { name: "", logo: "/assets/images/trusted-by/Design-X.png" },
        { name: "", logo: "/assets/images/trusted-by/Queer.png" },
        { name: "", logo: "/assets/images/trusted-by/Ux-Bangladesh.png" }
    ];
    
    const seededCompanies = [];
    for (const company of trustedCompanies) {
        const logo = await uploadImage(company.logo);
        seededCompanies.push({
            _key: company.logo,
            name: company.name,
            logo: logo
        });
    }

    await client.create({
        _type: 'trustedBy',
        title: "Design Communities",
        subtitle: "Join thousands of companies that trust our solutions to drive their success",
        companies: seededCompanies
    });

    // 12. Seed Settings (Footer & Contact)
    console.log('Seeding Settings...');
    await client.create({
        _type: 'settings',
        address: 'Fort York Boulevard, Toronto, ON M5V 0E6',
        email: 'shopnilmahamud@outlook.com',
        phone: '+1 (647) 861-9894',
        footerLinks: footerLinks.map(l => ({ _key: l.label, ...l })),
        socialLinks: [
            { _key: "linkedin", platform: "LinkedIn", url: "https://www.linkedin.com/" },
            { _key: "dribbble", platform: "Dribbble", url: "https://dribbble.com/" },
            { _key: "behance", platform: "Behance", url: "https://www.behance.net/" },
            { _key: "twitter", platform: "Twitter", url: "https://twitter.com/" }
        ]
    });

    return NextResponse.json({ message: 'Seeding complete!' });
  } catch (error) {
    console.error('Seeding error:', error);
    return NextResponse.json({ message: 'Error seeding data', error: error.message }, { status: 500 });
  }
}
