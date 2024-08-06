import type { Schema, Attribute } from '@strapi/strapi';

export interface MainMainTest extends Schema.Component {
  collectionName: 'components_main_main_tests';
  info: {
    displayName: 'FirstSection';
    icon: 'cube';
    description: '';
  };
  attributes: {
    primary_offer__text: Attribute.String;
    primary_offer_image: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    primary_offer__lead: Attribute.String;
    btn_shop__link: Attribute.String;
    btn_shop__text: Attribute.String;
    primary__text: Attribute.Text;
  };
}

export interface MainPrimaryItem extends Schema.Component {
  collectionName: 'components_main_primary_items';
  info: {
    displayName: 'PrimaryItem';
    icon: 'archive';
    description: '';
  };
  attributes: {
    primary_item__link: Attribute.String;
    primary_item__price_new: Attribute.Decimal;
    primary_item__price_old: Attribute.Decimal;
    primary_item__price_symbol: Attribute.String;
    primary_item__title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.main-test': MainMainTest;
      'main.primary-item': MainPrimaryItem;
    }
  }
}
