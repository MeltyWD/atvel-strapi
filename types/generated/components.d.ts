import type { Schema, Attribute } from '@strapi/strapi';

export interface WarrantyContentSectionContent extends Schema.Component {
  collectionName: 'components_warranty_content_section_contents';
  info: {
    displayName: 'sectionContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface WarrantyContentItemCategoryContentReverse
  extends Schema.Component {
  collectionName: 'components_warranty_content_item_category_content_reverses';
  info: {
    displayName: 'itemCategoryContentReverse';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.String & Attribute.Required;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WarrantyContentIntroListItems extends Schema.Component {
  collectionName: 'components_warranty_content_intro_list_items';
  info: {
    displayName: 'introListItems';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface WarrantyContentIntroContent extends Schema.Component {
  collectionName: 'components_warranty_content_intro_contents';
  info: {
    displayName: 'introContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    list: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface WarrantyContentHeadingContent extends Schema.Component {
  collectionName: 'components_warranty_content_heading_contents';
  info: {
    displayName: 'headingContent';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface WarrantyContentFormContent extends Schema.Component {
  collectionName: 'components_warranty_content_form_contents';
  info: {
    displayName: 'formContent';
    description: '';
  };
  attributes: {
    checkboxLabel: Attribute.String & Attribute.Required;
    textButton: Attribute.String & Attribute.Required;
    empty: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface WarrantyContentCategoryListItems extends Schema.Component {
  collectionName: 'components_warranty_content_category_list_items';
  info: {
    displayName: 'categoryListItems';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface VacancyContentVacancyContent extends Schema.Component {
  collectionName: 'components_vacancy_content_vacancy_contents';
  info: {
    displayName: 'vacancyContent';
  };
  attributes: {
    header: Attribute.String & Attribute.Required;
    button: Attribute.String & Attribute.Required;
  };
}

export interface VacancyContentStepsListItems extends Schema.Component {
  collectionName: 'components_vacancy_content_steps_list_items';
  info: {
    displayName: 'stepsListItems';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    num: Attribute.Integer & Attribute.Required;
  };
}

export interface VacancyContentSectionContent extends Schema.Component {
  collectionName: 'components_vacancy_content_section_contents';
  info: {
    displayName: 'sectionContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface VacancyContentPrettyHeading extends Schema.Component {
  collectionName: 'components_vacancy_content_pretty_headings';
  info: {
    displayName: 'prettyHeadingContent';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.Text & Attribute.Required;
    vacancy: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface VacancyContentPrettyHeadingVacancyContent
  extends Schema.Component {
  collectionName: 'components_vacancy_content_pretty_heading_vacancy_contents';
  info: {
    displayName: 'prettyHeadingVacancyContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface VacancyContentIntroContent extends Schema.Component {
  collectionName: 'components_vacancy_content_intro_contents';
  info: {
    displayName: 'introContent';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    list: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
  };
}

export interface VacancyContentHeadingContent extends Schema.Component {
  collectionName: 'components_vacancy_content_heading_contents';
  info: {
    displayName: 'headingContent';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface VacancyContentFormContent extends Schema.Component {
  collectionName: 'components_vacancy_content_form_contents';
  info: {
    displayName: 'formContent';
  };
  attributes: {
    textLabel: Attribute.String & Attribute.Required;
    checkboxLabel: Attribute.String & Attribute.Required;
    textButton: Attribute.String & Attribute.Required;
    file: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface VacancyContentFaqContent extends Schema.Component {
  collectionName: 'components_vacancy_content_faq_contents';
  info: {
    displayName: 'faqContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ProductInfoSpecification extends Schema.Component {
  collectionName: 'components_product_info_specifications';
  info: {
    displayName: 'specification';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    specification: Attribute.String;
  };
}

export interface ProductInfoReview extends Schema.Component {
  collectionName: 'components_product_info_reviews';
  info: {
    displayName: 'review';
    icon: 'archive';
  };
  attributes: {};
}

export interface ProductInfoProductLinks extends Schema.Component {
  collectionName: 'components_product_info_product_links';
  info: {
    displayName: 'product-links';
    icon: 'command';
  };
  attributes: {
    marketplace: Attribute.Enumeration<['Ozon', 'Wildberries']> &
      Attribute.Required;
    link: Attribute.Text & Attribute.Required;
  };
}

export interface PartnershipContentSpoilerContent extends Schema.Component {
  collectionName: 'components_partnership_content_spoiler_contents';
  info: {
    displayName: 'spoilerListItems';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface PartnershipContentSectionContent extends Schema.Component {
  collectionName: 'components_partnership_content_section_contents';
  info: {
    displayName: 'sectionContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PartnershipContentPrettyHeadingContent
  extends Schema.Component {
  collectionName: 'components_partnership_content_pretty_heading_contents';
  info: {
    displayName: 'prettyHeadingContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface PartnershipContentIntroListItems extends Schema.Component {
  collectionName: 'components_partnership_content_intro_list_items';
  info: {
    displayName: 'introListItems';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface PartnershipContentIntroContent extends Schema.Component {
  collectionName: 'components_partnership_content_intro_contents';
  info: {
    displayName: 'introContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    list: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface PartnershipContentHeadingContent extends Schema.Component {
  collectionName: 'components_partnership_content_heading_contents';
  info: {
    displayName: 'HeadingContent';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface PartnershipContentFormContent extends Schema.Component {
  collectionName: 'components_partnership_content_form_contents';
  info: {
    displayName: 'formContent';
    description: '';
  };
  attributes: {
    textLabel: Attribute.String & Attribute.Required;
    checkboxLabel: Attribute.String & Attribute.Required;
    textButton: Attribute.String & Attribute.Required;
    text: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface PartnershipContentFaqContent extends Schema.Component {
  collectionName: 'components_partnership_content_faq_contents';
  info: {
    displayName: 'faqContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface NewsContentSubscriptionContent extends Schema.Component {
  collectionName: 'components_news_content_subscription_contents';
  info: {
    displayName: 'subscriptionContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.Text & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface NewsContentPrettyHeadingContent extends Schema.Component {
  collectionName: 'components_news_content_pretty_heading_contents';
  info: {
    displayName: 'prettyHeadingContent';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    full: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface NewsContentNewsPrimaryListItems extends Schema.Component {
  collectionName: 'components_news_content_news_primary_list_items';
  info: {
    displayName: 'newsPrimaryListItems';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface NewsContentNewsPrimaryContent extends Schema.Component {
  collectionName: 'components_news_content_news_primary_contents';
  info: {
    displayName: 'newsPrimaryContent';
    description: '';
  };
  attributes: {
    header: Attribute.Text & Attribute.Required;
    link: Attribute.String & Attribute.Required;
    linkText: Attribute.String & Attribute.Required;
  };
}

export interface NewsContentHeaderContent extends Schema.Component {
  collectionName: 'components_news_content_header_contents';
  info: {
    displayName: 'headerContent';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface NewsContentButtonText extends Schema.Component {
  collectionName: 'components_news_content_button_texts';
  info: {
    displayName: 'buttonText';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
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

export interface ContactContentSectionContent extends Schema.Component {
  collectionName: 'components_contact_content_section_contents';
  info: {
    displayName: 'sectionContent';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ContactContentPhoneContent extends Schema.Component {
  collectionName: 'components_contact_content_phone_contents';
  info: {
    displayName: 'phoneContent';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    phoneNumber: Attribute.String & Attribute.Required;
  };
}

export interface ContactContentOfficeContent extends Schema.Component {
  collectionName: 'components_contact_content_office_contents';
  info: {
    displayName: 'officeContent';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
  };
}

export interface ContactContentMailContent extends Schema.Component {
  collectionName: 'components_contact_content_mail_contents';
  info: {
    displayName: 'mailContent';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    mail: Attribute.Email & Attribute.Required;
  };
}

export interface ContactContentIntroContent extends Schema.Component {
  collectionName: 'components_contact_content_intro_contents';
  info: {
    displayName: 'introContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
  };
}

export interface ContactContentHeadingContent extends Schema.Component {
  collectionName: 'components_contact_content_heading_contents';
  info: {
    displayName: 'headingContent';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface ContactContentFormContent extends Schema.Component {
  collectionName: 'components_contact_content_form_contents';
  info: {
    displayName: 'formContent';
  };
  attributes: {
    checkboxLabel: Attribute.String & Attribute.Required;
    textButton: Attribute.String & Attribute.Required;
    empty: Attribute.Boolean & Attribute.DefaultTo<true>;
  };
}

export interface CategoryContentSectionContent extends Schema.Component {
  collectionName: 'components_category_content_section_contents';
  info: {
    displayName: 'sectionContent';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface CategoryContentItemsCategoryContent extends Schema.Component {
  collectionName: 'components_category_content_items_category_contents';
  info: {
    displayName: 'itemsCategoryContent';
    description: '';
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
    full: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CategoryContentItemCategoryContent extends Schema.Component {
  collectionName: 'components_category_content_item_category_contents';
  info: {
    displayName: 'itemCategoryContentReverse';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    full: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface CategoryContentHeadingContent extends Schema.Component {
  collectionName: 'components_category_content_heading_contents';
  info: {
    displayName: 'headingContent';
    description: '';
  };
  attributes: {
    title: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentFaqContent extends Schema.Component {
  collectionName: 'components_category_content_faq_contents';
  info: {
    displayName: 'faqContent';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentCategoryListItems extends Schema.Component {
  collectionName: 'components_category_content_category_list_items';
  info: {
    displayName: 'categoryListItemsReverse';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface CategoryContentCategoryHeaderContent extends Schema.Component {
  collectionName: 'components_category_content_category_header_contents';
  info: {
    displayName: 'categoryHeaderContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentPostListItems extends Schema.Component {
  collectionName: 'components_about_content_post_list_items';
  info: {
    displayName: 'postListItems';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentMotivationContent extends Schema.Component {
  collectionName: 'components_about_content_motivation_contents';
  info: {
    displayName: 'motivationContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentItemCategoryContent extends Schema.Component {
  collectionName: 'components_about_content_item_category_contents';
  info: {
    displayName: 'itemCategoryContent';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    reverse: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    full: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface AboutContentItemCategoryContentReverse
  extends Schema.Component {
  collectionName: 'components_about_content_item_category_content_reverses';
  info: {
    displayName: 'itemCategoryContentReverse';
    description: '';
  };
  attributes: {
    tag: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
    button: Attribute.String & Attribute.Required;
    white: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    reverse: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    full: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface AboutContentIntroContent extends Schema.Component {
  collectionName: 'components_about_content_intro_contents';
  info: {
    displayName: 'introContent';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    lead: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentHeadingContent extends Schema.Component {
  collectionName: 'components_about_content_heading_contents';
  info: {
    displayName: 'headingContent';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    text: Attribute.Text & Attribute.Required;
  };
}

export interface AboutContentCategoryListItems extends Schema.Component {
  collectionName: 'components_about_content_category_list_items';
  info: {
    displayName: 'categoryListItems';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'warranty-content.section-content': WarrantyContentSectionContent;
      'warranty-content.item-category-content-reverse': WarrantyContentItemCategoryContentReverse;
      'warranty-content.intro-list-items': WarrantyContentIntroListItems;
      'warranty-content.intro-content': WarrantyContentIntroContent;
      'warranty-content.heading-content': WarrantyContentHeadingContent;
      'warranty-content.form-content': WarrantyContentFormContent;
      'warranty-content.category-list-items': WarrantyContentCategoryListItems;
      'vacancy-content.vacancy-content': VacancyContentVacancyContent;
      'vacancy-content.steps-list-items': VacancyContentStepsListItems;
      'vacancy-content.section-content': VacancyContentSectionContent;
      'vacancy-content.pretty-heading': VacancyContentPrettyHeading;
      'vacancy-content.pretty-heading-vacancy-content': VacancyContentPrettyHeadingVacancyContent;
      'vacancy-content.intro-content': VacancyContentIntroContent;
      'vacancy-content.heading-content': VacancyContentHeadingContent;
      'vacancy-content.form-content': VacancyContentFormContent;
      'vacancy-content.faq-content': VacancyContentFaqContent;
      'product-info.specification': ProductInfoSpecification;
      'product-info.review': ProductInfoReview;
      'product-info.product-links': ProductInfoProductLinks;
      'partnership-content.spoiler-content': PartnershipContentSpoilerContent;
      'partnership-content.section-content': PartnershipContentSectionContent;
      'partnership-content.pretty-heading-content': PartnershipContentPrettyHeadingContent;
      'partnership-content.intro-list-items': PartnershipContentIntroListItems;
      'partnership-content.intro-content': PartnershipContentIntroContent;
      'partnership-content.heading-content': PartnershipContentHeadingContent;
      'partnership-content.form-content': PartnershipContentFormContent;
      'partnership-content.faq-content': PartnershipContentFaqContent;
      'news-content.subscription-content': NewsContentSubscriptionContent;
      'news-content.pretty-heading-content': NewsContentPrettyHeadingContent;
      'news-content.news-primary-list-items': NewsContentNewsPrimaryListItems;
      'news-content.news-primary-content': NewsContentNewsPrimaryContent;
      'news-content.header-content': NewsContentHeaderContent;
      'news-content.button-text': NewsContentButtonText;
      'main.primary-item': MainPrimaryItem;
      'main.main-test': MainMainTest;
      'contact-content.section-content': ContactContentSectionContent;
      'contact-content.phone-content': ContactContentPhoneContent;
      'contact-content.office-content': ContactContentOfficeContent;
      'contact-content.mail-content': ContactContentMailContent;
      'contact-content.intro-content': ContactContentIntroContent;
      'contact-content.heading-content': ContactContentHeadingContent;
      'contact-content.form-content': ContactContentFormContent;
      'category-content.section-content': CategoryContentSectionContent;
      'category-content.items-category-content': CategoryContentItemsCategoryContent;
      'category-content.item-category-content': CategoryContentItemCategoryContent;
      'category-content.heading-content': CategoryContentHeadingContent;
      'category-content.faq-content': CategoryContentFaqContent;
      'category-content.category-list-items': CategoryContentCategoryListItems;
      'category-content.category-header-content': CategoryContentCategoryHeaderContent;
      'about-content.post-list-items': AboutContentPostListItems;
      'about-content.motivation-content': AboutContentMotivationContent;
      'about-content.item-category-content': AboutContentItemCategoryContent;
      'about-content.item-category-content-reverse': AboutContentItemCategoryContentReverse;
      'about-content.intro-content': AboutContentIntroContent;
      'about-content.heading-content': AboutContentHeadingContent;
      'about-content.category-list-items': AboutContentCategoryListItems;
    }
  }
}
