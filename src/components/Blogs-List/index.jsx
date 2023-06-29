/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Blog1Data from '../../data/blog1.json';
import Link from 'next/link';

const BlogsList = () => {
  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {Blog1Data.map((item) => (
                  <div className="item mb-80" key={item.id}>
                    <div className="img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                      <div className="date">
                        <h5>
                          <span className="num">{item.date2[1]}</span>
                          <span>{item.date2[0]}</span>
                        </h5>
                        <div className="date">
                          <span>{item.by}</span>
                        </div>
                      </div>

                      <div className="cont">
                        <div className="tags">
                          <Link href="#">{item.tags1}</Link>
                          <Link href="#">{item.tags2}</Link>
                          <Link href="#">{item.tags3}</Link>
                        </div>
                        <h4 className="title">
                          <Link href="/blog-details">{item.title}</Link>
                        </h4>
                        <p>{item.description}</p>
                        <Link href="/blog-details" className="more">
                          Continue lendo
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <span className="active">
                    <Link href="#">1</Link>
                  </span>
                  <span>
                    <Link href="#">2</Link>
                  </span>
                  <span>
                    <Link href="#">
                      <i className="fas fa-angle-right">...</i>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
