import entities from 'entities';

// trop configuration file

export default async function(){

  const configuration = {
    cmd: {
      youtube: {
        prefix: 'yid-', // be careful of ad-blockers uBlock blacklisted youtube-
        images: 'dist/image',
        template: c => `<img title="${entities.encode(c.title)}" src="${entities.encode(c.url)}">`,

      }
    }
  };

  return configuration;

};
