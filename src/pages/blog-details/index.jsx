import React from 'react';
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';
import PostDetails from '../../components/Post-details';

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      <PostDetails />
    </MainLayout>
  );
};

export default BlogDetails;
