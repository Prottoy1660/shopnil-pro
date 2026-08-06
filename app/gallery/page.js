import Header1 from '@/components/headers/Header1';
import Footer2 from '@/components/footers/Footer2';
import Copyright from '@/components/footers/Copyright';
import CloudinaryGallery from '@/components/cloudinary/CloudinaryGallery';

export const metadata = {
  title: 'Gallery',
  description: 'Dynamic gallery powered by Cloudinary.'
};

export default function Page() {
  return (
    <>
      <Header1 />
      <CloudinaryGallery
        folder={''}
        allLabel="All Moments"
        filterExtras={
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Placeholder for "small relations" or other content */}
            {/* <span style={{ color: '#888', fontSize: '0.9rem' }}>More...</span> */}
          </div>
        }
      />
      <Footer2 />
      <Copyright />
    </>
  );
}