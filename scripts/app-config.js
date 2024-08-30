/*
 * {
 *   logo: <uri>,
 *   name: <name>,
 *   style: null, // null to display all available styles
 *   categories: [
 *     {
 *       name: '<category_name>',
 *       links: [
 *         {
 *           name: '<name>',
 *           href: '<link>',
 *           description: '<description>',  // (optional)
 *           image: '<uri>' ,               // (optional)
 *           icon: '<icon>',                // (optional) An icon from https://fontawesome.com/search, format: fa-<name>
 *           iconColor: '<color>',          // (optional) A color from https://tailwindcss.com/docs/customizing-colors, format: <name>[-<weight>]
 *           iconDarkColor: '<color>',      // (optional) @see iconColor
 *           iconBackground: '<color>',     // (optional) @see iconColor
 *           iconDarkBackground: '<color>', // (optional) @see iconColor
 *         },
 *       ],
 *     },
 *   ],
 * }
 */

export default {
  name: 'Kunsevchina',
  logo: 'img/logo.png',
  style: 'image-background',
  categories: [
    {
      name: 'Hui',
      links: [
        {
          name: 'Library',
          href: 'https://kunsevchina.ddns.net:3001/',
          description: 'A library app that holds every book the owner read or wanted to read.',
          image: 'img/logo/library.png',
          icon: 'fa-book',
          iconColor: 'gray-50',
          iconDarkColor: 'gray-50',
          iconBackground: 'teal-500',
          iconDarkBackground: 'teal-400',
        },
      ]
    },
    {
      name: 'Primary Category',
      links: [
        {
          name: 'Library',
          href: 'https://kunsevchina.ddns.net:3001/',
          description: 'A library app that holds every book the owner read or wanted to read.',
          image: 'img/logo/library.png',
          icon: 'fa-book',
          iconColor: 'gray-50',
          iconDarkColor: 'gray-50',
          iconBackground: 'teal-500',
          iconDarkBackground: 'teal-400',
        },
        {
          name: 'Finance Manager',
          href: 'https://kunsevchina.ddns.net:3002/',
          description: "Don't skip taxes kids!",
          image: 'img/logo/finance-management.png',
          icon: 'fa-wallet',
          iconColor: 'gray-50',
          iconDarkColor: 'gray-50',
          iconBackground: 'lime-600',
          iconDarkBackground: 'lime-500',
        },
        {
          name: 'SyncThing',
          href: 'https://kunsevchina.ddns.net:3003/',
          description:
            'SyncThing is a continuous file synchronization program. It synchronizes files between two or more computers in real time, safely protected from prying eyes. Your data is your data alone and you deserve to choose where it is stored, whether it is shared with some third party, and how it’s transmitted over the internet.',
          image: 'img/logo/syncthing.svg',
          icon: 'fa-rotate',
          iconColor: 'gray-50',
          iconDarkColor: 'gray-50',
          iconBackground: 'sky-500',
          iconDarkBackground: 'sky-400',
        },
      ],
    },
  ],
};
