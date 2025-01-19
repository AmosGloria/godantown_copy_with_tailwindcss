// pages/BlogPage.tsx
import React from 'react';
import styles from './ourBlog.module.css';
import Navbar from '../components/NavBar';
import Footer from '../components/footer/page';

const BlogPage = () => {
  return (
    <>
    <div>
        <Navbar/>
        </div>  
    <div></div>              
    <div className={styles.container}>
    <div className={styles.firstCircle}></div>
    <div className={styles.secondCircle}></div>
    <div className={styles.thirdCircle}></div>
    <div className={styles.fourthCircle}></div> 
      <p className={styles.paragraph}>OUR BLOG</p>
      <h1 className={styles.heading}>STAY IN TOUCH WITH OUR 
        <span className={styles.line}>LATEST BLOG</span></h1>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;
