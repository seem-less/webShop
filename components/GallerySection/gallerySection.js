/* components/GallerySection/gallerySection.js */

import { useState } from 'react';
import { number } from 'prop-types';

//import categoryListQuery from '@magento/venia-ui/lib/queries/getCategoryListGallerySection.graphql';
//import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
//import { useCategoryList } from '@magento/peregrine/lib/talons/CategoryList/useCategoryList';
//import NoProductsFound from '../../RootComponents/Category/NoProductsFound';

import GallerySectionItem from './gallerySectionItem';
import Masonry from 'react-masonry-component';
import { useQuery } from '@apollo/client';
import CATEGORIES_QUERY from '../../queries/get-categories';

const masonryOptions = {
  transitionDuration: 0,
  itemSelector: '.grid-item'
};

// map Magento 2.3.1 schema changes to Venia 2.0.0 proptype shape to maintain backwards compatibility
const mapCategory = categoryItem => {
  const { items } = categoryItem.productImagePreview;
  return {
      ...categoryItem,
      productImagePreview: {
          items: items.map(item => {
              const { small_image } = item;
              return {
                  ...item,
                  small_image:
                      typeof small_image === 'object'
                          ? small_image.url
                          : small_image
              };
          })
      }
  };
};

const GallerySection = () => {

  const [ productCategories, setProductCategories] = useState(null);

  // Get list of categories.
  const {loading, error, data } = useQuery(CATEGORIES_QUERY,{
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      setProductCategories(data.productCategories.nodes);
    }
  });

  let child;
  if (error) {
      child = (
          <div className={classes.fetchError}>
              Data Fetch Error: <pre>{error.message}</pre>
          </div>
      );
  }
  if (loading || !productCategories) {
      child = (
        <div>Loading...</div>
      );
  } else if (productCategories.length === 0) {
      child = (
          <div>No child categories found.</div>
      );
  } else {
    child = productCategories.map((productCategory, index) => (
      <GallerySectionItem key={index} catId={productCategory.id} /> 
    ))
  }

  return (
    <>
    <div>{child}</div>
    <section className="section section-xxl bg-default">
        <div className="container">
          <h2 className="text-transform-capitalize wow fadeScale">Our Gallery</h2>
          
          <div className="isotope-wrap">
            <div className="isotope-filters">
              <button className="isotope-filters-toggle button button-sm button-icon button-icon-right button-default-outline" data-custom-toggle=".isotope-filters-list" data-custom-toggle-disable-on-blur="true" data-custom-toggle-hide-on-blur="true"><span className="icon mdi mdi-chevron-down"></span>Filter</button>
              <div className="isotope-filters-list-wrap">
                <ul className="isotope-filters-list">
                  <li><a className="active" href="#" data-isotope-filter="*">All</a></li>
                  <li><a href="#" data-isotope-filter="Type 1">Fruits</a></li>
                  <li><a href="#" data-isotope-filter="Type 2">Vegetables</a></li>
                </ul>
              </div>
            </div>
            <Masonry>
            {/* <div className="row row-30 isotope isotope-custom-1" data-lightgallery="group"> */}
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
                {/* <!-- Thumbnail Classic--> */}
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure">
                    {/* <img src={masonryGallery1} alt="" width="270" height="250"/> */}
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Bananas</a></h5>
                      <div className="thumbnail-classic-price">$12.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button">
                          {/* <a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item">
                            <img src={masonryGallery1} alt="" width="270" height="250"/></a> */}
                        </div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
                {/* <!-- Thumbnail Classic--> */}
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure">
                    {/* <img src={masonryGallery3} alt="" width="270" height="530"/> */}
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Tomatoes</a></h5>
                      <div className="thumbnail-classic-price">$13.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button">
                          {/* <a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery3} alt="" width="270" height="530"/></a> */}
                          </div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
                {/* <!-- Thumbnail Classic--> */}
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure">
                    {/* <img src={masonryGallery1} alt="" width="270" height="250"/> */}
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Lemons</a></h5>
                      <div className="thumbnail-classic-price">$10.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button">
                          {/* <a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery1} alt="" width="270" height="250"/></a> */}
                        </div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              {/* <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 2">
            
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure"><img src={masonryGallery1} alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Avocados</a></h5>
                      <div className="thumbnail-classic-price">$8.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery1} alt="" width="270" height="250"/></a></div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter="Type 1">
               
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure"><img src={masonryGallery1} alt="" width="270" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Strawberries</a></h5>
                      <div className="thumbnail-classic-price">$14.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery1} alt="" width="270" height="250"/></a></div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-4 col-xl-6 isotope-item" data-filter="Type 2">
           
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure"><img src={masonryGallery3} alt="" width="570" height="530"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Sorrel</a></h5>
                      <div className="thumbnail-classic-price">$16.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery3} alt="" width="570" height="530"/></a></div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 col-lg-8 col-xl-6 isotope-item" data-filter="Type 2">
                
                <article className="thumbnail-classic block-1">
                  <div className="thumbnail-classic-figure"><img src={masonryGallery3} alt="" width="570" height="250"/>
                  </div>
                  <div className="thumbnail-classic-caption">
                    <div>
                      <h5 className="thumbnail-classic-title"><a href="single-product.html">Almonds</a></h5>
                      <div className="thumbnail-classic-price">$10.99</div>
                      <div className="thumbnail-classic-button-wrap">
                        <div className="thumbnail-classic-button"><a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" href={masonryGallery2} data-lightgallery="item"><img src={masonryGallery3} alt="" width="570" height="250"/></a></div>
                        <div className="thumbnail-classic-button"><a className="button button-primary button-zakaria fl-bigmug-line-shopping202" href="cart-page.html"></a></div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
             */}
            {/* </div> */}
            </Masonry>
          </div>
        </div>
      </section>
    </>
  );

}

// GallerySection.propTypes = {
//   id: number
// };


export default GallerySection;