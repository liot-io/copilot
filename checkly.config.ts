/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'checkly';
import { EmailAlertChannel, Frequency } from 'checkly/constructs';

const emailChannel = new EmailAlertChannel('email-channel-1', {
  // FIXME: add your own email address, Checkly will send you an email notification if a check fails
  address: 'steffenadrupbenne@gmail.com',
  sendDegraded: true,
});

export const config = defineConfig({
  projectName: 'liot.io',
  logicalId: 'liot.io_1.0.0',
  repoUrl: 'https://github.com/liot-io/copilot',
  checks: {
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['website'],
    runtimeId: '2023.09',
    environmentVariables: [
      {
        key: 'PRODUCTION_URL',
        // FIXME: Add your own production URL
        value: 'https://google.com',
      },
    ],
    browserChecks: {
      frequency: Frequency.EVERY_24H,
      testMatch: '**/tests/e2e/**/*.check.spec.ts',
      alertChannels: [emailChannel],
    },
  },
  cli: {
    runLocation: 'eu-west-1',
    reporters: ['list'],
  },
});

export default config;
