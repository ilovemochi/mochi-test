/* eslint no-redeclare: 0 */
import { equals } from 'ramda';
import { ReactElement } from 'react';

import { CardWrapper } from './card.styles';
import { CardVariant, EssentialsProps, ProductProps, RestaurantProps } from './card.types';
import { Essential, Product, Restaurant } from './variants';

/**
 * @description this overloads the types so they depend on the variant
 * @param data {object}
 * @constructor
 * @return ReactElement
 */
function Card(data: EssentialsProps): ReactElement;
function Card(data: ProductProps): ReactElement;
function Card(data: RestaurantProps): ReactElement;
function Card({ variant, ...data }) {
  const primitiveVariant = variant.toLowerCase().replace('mini', '') as CardVariant;
  return (
    <CardWrapper variant={primitiveVariant} role="listitem" aria-hidden="false" bg="foreground">
      {equals(variant, 'essential') && (
        <Essential
          image={data.image}
          productName={data.productName}
          storeName={data.storeName}
          onClick={data.onClick}
          {...data}
        />
      )}
      {equals(variant, 'product') && (
        <Product
          image={data.image}
          productName={data.productName}
          description={data.description}
          price={data.price}
          btnText={data.btnText}
          onClick={data.onClick}
          prepareTime={data.prepareTime}
          {...data}
        />
      )}
      {equals(variant, 'miniProduct') && (
        <Product
          image={data.image}
          productName={data.productName}
          description={data.description}
          compressed
          price={data.price}
          btnText={data.btnText}
          onClick={data.onClick}
          prepareTime={data.prepareTime}
          {...data}
        />
      )}
      {equals(variant, 'restaurant') && (
        <Restaurant
          image={data.image}
          logo={data.logo}
          storeName={data.storeName}
          isOpen={data.isOpen}
          limitHour={data.limitHour}
          onClick={data.onClick}
          likes={data.likes}
          distanceMin={data.distanceMin}
          {...data}
        />
      )}
      {equals(variant, 'miniRestaurant') && (
        <Restaurant
          image={data.image}
          compressed
          logo={data.logo}
          storeName={data.storeName}
          isOpen={data.isOpen}
          limitHour={data.limitHour}
          onClick={data.onClick}
          likes={data.likes}
          distanceMin={data.distanceMin}
          {...data}
        />
      )}
    </CardWrapper>
  );
}

export default Card;

export * from './card.types';
