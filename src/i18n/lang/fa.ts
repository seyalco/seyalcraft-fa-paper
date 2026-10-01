import type { UIStrings } from "../types";

export default {
  nav: {
    home: "خانه",
    posts: "نوشته‌ها",
    tags: "برچسب‌ها",
    about: "درباره",
    archives: "بایگانی",
    search: "جست‌وجو",
  },

  post: {
    publishedAt: "منتشر شده در",
    updatedAt: "به‌روزرسانی شده",
    sharePostIntro: "اشتراک‌گذاری این نوشته:",
    sharePostOn: "اشتراک‌گذاری این نوشته در {{platform}}",
    sharePostViaEmail: "اشتراک‌گذاری این نوشته از طریق ایمیل",
    tagLabel: "برچسب‌ها",
    backToTop: "بازگشت به بالا",
    goBack: "بازگشت",
    editPage: "ویرایش صفحه",
    previousPost: "نوشته قبلی",
    nextPost: "نوشته بعدی",
  },

  pagination: {
    prev: "قبلی",
    next: "بعدی",
    page: "صفحه",
  },

  home: {
    socialLinks: "شبکه‌های اجتماعی",
    featured: "برگزیده",
    recentPosts: "نوشته‌های اخیر",
    allPosts: "همه نوشته‌ها",
  },

  footer: {
    copyright: "حق نشر",
    allRightsReserved: "تمامی حقوق محفوظ است.",
  },

  pages: {
    tagTitle: "برچسب",
    tagDesc: "همه نوشته‌های دارای این برچسب",

    tagsTitle: "برچسب‌ها",
    tagsDesc: "همه برچسب‌های استفاده‌شده در نوشته‌ها.",

    postsTitle: "نوشته‌ها",
    postsDesc: "همه نوشته‌هایی که منتشر کرده‌ام.",

    archivesTitle: "بایگانی",
    archivesDesc: "همه نوشته‌های بایگانی‌شده.",

    searchTitle: "جست‌وجو",
    searchDesc: "جست‌وجو در نوشته‌ها ...",
  },

  a11y: {
    skipToContent: "رفتن به محتوای اصلی",
    openMenu: "باز کردن منو",
    closeMenu: "بستن منو",
    toggleTheme: "تغییر حالت نمایش",
    searchPlaceholder: "جست‌وجو در نوشته‌ها...",
    noResults: "نتیجه‌ای پیدا نشد",
    goToPreviousPage: "رفتن به صفحه قبلی",
    goToNextPage: "رفتن به صفحه بعدی",
  },

  notFound: {
    title: "۴۰۴ — صفحه پیدا نشد",
    message: "صفحه موردنظر پیدا نشد",
    goHome: "بازگشت به خانه",
  },
} satisfies UIStrings;
