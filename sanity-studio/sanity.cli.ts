import {defineCliConfig} from 'sanity/cli';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';
const studioHost = process.env.SANITY_STUDIO_HOSTNAME || 'sahaja-yoga-muenchen';

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  studioHost,
  deployment: {
    appId: 'qxdtrlgn3cpe2nbzxe6eq885'
  }
});
