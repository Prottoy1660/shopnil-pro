import Header1 from '@/components/headers/Header1';
import Footer2 from '@/components/footers/Footer2';
import Copyright from '@/components/footers/Copyright';
import FlickrGallery from '@/components/flickr/FlickrGallery';

export const metadata = {
  title: 'Flickr Gallery',
  description: 'Dynamic Flickr gallery with featured photo and responsive grid.'
};

export default function Page() {
  return (
    <>
      <Header1 />
      <FlickrGallery />
      <Footer2 />
      <Copyright />
    </>
  );
}