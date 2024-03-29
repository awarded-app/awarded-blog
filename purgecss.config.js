class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\\/]+/g);
  }
}

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md',
  ],
  whitelist: [
    'body',
    'html',
    'img',
    'a',
    'g-image',
    'g-image--lazy',
    'g-image--loaded',
    'button-social',
    'icon-linkedin',
    'icon-facebook',
    'icon-reddit',
    'icon-whatsapp',
    'icon-email',
    'icon-twitter',
    'linkedin__design__outline',
    'facebook__design__outline',
    'twitter__design__outline',
    'reddit__design__outline',
    'whatsapp__design__outline',
    'viber__design__outline'
  ],
  extractors: [
    {
      extractor: TailwindExtractor,
      extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
    },
  ],
};
