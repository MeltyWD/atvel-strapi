import type { Schema, Attribute } from "@strapi/strapi";

export interface CategoryContentSectionContent extends Schema.Component {
  collectionName: "components_category_content_section_contents";
  info: {
    displayName: "sectionContent";
    description: "";
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface CategoryContentItemsCategoryContent extends Schema.Component {
  collectionName: "components_category_content_items_category_contents";
  info: {
    displayName: "itemsCategoryContent";
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CategoryContentItemCategoryContent extends Schema.Component {
  collectionName: "components_category_content_item_category_contents";
  info: {
    displayName: "itemCategoryContentReverse";
    description: "";
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CategoryContentHeadingContent extends Schema.Component {
  collectionName: "components_category_content_heading_contents";
  info: {
    displayName: "headingContent";
    description: "";
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentFaqContent extends Schema.Component {
  collectionName: "components_category_content_faq_contents";
  info: {
    displayName: "faqContent";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentCategoryListItems extends Schema.Component {
  collectionName: "components_category_content_category_list_items";
  info: {
    displayName: "categoryListItemsReverse";
    description: "";
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentCategoryHeaderContent extends Schema.Component {
  collectionName: "components_category_content_category_header_contents";
  info: {
    displayName: "categoryHeaderContent";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface MainPrimaryItem extends Schema.Component {
  collectionName: "components_main_primary_items";
  info: {
    displayName: "PrimaryItem";
    icon: "archive";
    description: "";
  };
  attributes: {
    primary_item__link: Attribute.String;
    primary_item__price_new: Attribute.Decimal;
    primary_item__price_old: Attribute.Decimal;
    primary_item__price_symbol: Attribute.String;
    primary_item__title: Attribute.String;
  };
}

export interface MainMainTest extends Schema.Component {
  collectionName: "components_main_main_tests";
  info: {
    displayName: "FirstSection";
    icon: "cube";
    description: "";
  };
  attributes: {
    primary_offer__text: Attribute.String;
    primary_offer_image: Attribute.Media<
      "images" | "files" | "videos" | "audios"
    >;
    primary_offer__lead: Attribute.String;
    btn_shop__link: Attribute.String;
    btn_shop__text: Attribute.String;
    primary__text: Attribute.Text;
  };
}

export interface ProductInfoSpecification extends Schema.Component {
  collectionName: "components_product_info_specifications";
  info: {
    displayName: "specification";
    icon: "bulletList";
  };
  attributes: {
    specification: Attribute.String;
  };
}

export interface ProductInfoReview extends Schema.Component {
  collectionName: "components_product_info_reviews";
  info: {
    displayName: "review";
    icon: "archive";
  };
  attributes: {};
}

export interface AboutContentPostListItems extends Schema.Component {
  collectionName: "components_about_content_post_list_items";
  info: {
    displayName: "postListItems";
    description: "";
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentMotivationContent extends Schema.Component {
  collectionName: "components_about_content_motivation_contents";
  info: {
    displayName: "motivationContent";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentItemCategoryContent extends Schema.Component {
  collectionName: "components_about_content_item_category_contents";
  info: {
    displayName: "itemCategoryContent";
    description: "";
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface AboutContentItemCategoryContentReverse
  extends Schema.Component {
  collectionName: "components_about_content_item_category_content_reverses";
  info: {
    displayName: "itemCategoryContentReverse";
    description: "";
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    reverse: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface AboutContentIntroContent extends Schema.Component {
  collectionName: "components_about_content_intro_contents";
  info: {
    displayName: "introContent";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentHeadingContent extends Schema.Component {
  collectionName: "components_about_content_heading_contents";
  info: {
    displayName: "headingContent";
    icon: "apps";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentCategoryListItems extends Schema.Component {
  collectionName: "components_about_content_category_list_items";
  info: {
    displayName: "categoryListItems";
    description: "";
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "category-content.section-content": CategoryContentSectionContent;
      "category-content.items-category-content": CategoryContentItemsCategoryContent;
      "category-content.item-category-content": CategoryContentItemCategoryContent;
      "category-content.heading-content": CategoryContentHeadingContent;
      "category-content.faq-content": CategoryContentFaqContent;
      "category-content.category-list-items": CategoryContentCategoryListItems;
      "category-content.category-header-content": CategoryContentCategoryHeaderContent;
      "main.primary-item": MainPrimaryItem;
      "main.main-test": MainMainTest;
      "product-info.specification": ProductInfoSpecification;
      "product-info.review": ProductInfoReview;
      "about-content.post-list-items": AboutContentPostListItems;
      "about-content.motivation-content": AboutContentMotivationContent;
      "about-content.item-category-content": AboutContentItemCategoryContent;
      "about-content.item-category-content-reverse": AboutContentItemCategoryContentReverse;
      "about-content.intro-content": AboutContentIntroContent;
      "about-content.heading-content": AboutContentHeadingContent;
      "about-content.category-list-items": AboutContentCategoryListItems;
    }
  }
}
