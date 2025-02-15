const { CdklabsConstructLibrary } = require('cdklabs-projen-project-types');

const project = new CdklabsConstructLibrary({
  name: 'cdk-watchful',
  private: false,
  enablePRAutoMerge: true,
  description: 'Watching your CDK apps since 2019',
  defaultReleaseBranch: 'main',
  projenUpgradeSecret: 'PROJEN_GITHUB_TOKEN',

  authorName: 'Elad Ben-Israel',
  authorEmail: 'elad.benisrael@gmail.com',
  repository: 'https://github.com/eladb/cdk-watchful.git',
  keywords: [
    'cloudwatch',
    'monitoring',
  ],

  catalog: {
    twitter: 'emeshbi',
  },

  cdkVersion: '2.0.0',
  peerDependencies: [
    'aws-cdk-lib',
  ],

  devDeps: [
    'aws-sdk',
    'cdklabs-projen-project-types',
  ],

  // jsii publishing

  publishToMaven: {
    javaPackage: 'io.github.cdklabs.watchful',
    mavenGroupId: 'io.github.cdklabs',
    mavenArtifactId: 'cdk-watchful',
    mavenEndpoint: 'https://s01.oss.sonatype.org',
  },

  publishToPypi: {
    distName: 'cdk-watchful',
    module: 'cdk_watchful',
  },

  publishToNuget: {
    dotNetNamespace: 'Cdklabs.CdkWatchful',
    packageId: 'Cdklabs.CdkWatchful',
  },

  autoApproveOptions: {
    allowedUsernames: ['cdklabs-automation'],
    secret: 'GITHUB_TOKEN',
  },

  autoApproveUpgrades: true,

  minNodeVersion: '16.14.0',
  workflowNodeVersion: '16.x',
});

project.gitignore.exclude('.env', '.idea');
project.gitignore.exclude('example/*.js', 'example/*.d.ts');

project.synth();
