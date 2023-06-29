import React from 'react';
import MainLayout from '../../layouts/main';
import PageHeader from '../../components/Page-header';
import BlogsList from '../../components/Blogs-List';

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3');
  }, []);
  return (
    <MainLayout>
      <PageHeader title="Nosso Blog" fullPath={[]} />
      <br />
      <BlogsList />
    </MainLayout>
  );
};

export default Blogs;
