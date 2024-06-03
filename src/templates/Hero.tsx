import {
  LockOpen1Icon,
  PlayIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/button';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-48 pb-72">
      <CenteredHero
        banner={{
          href: 'https://github.com/liot-io/copilot',
          text: (
            <>
              <TwitterLogoIcon className="mr-1 size-5" /> {t('follow_twitter')}
            </>
          ),
        }}
        title={t.rich('title', {
          important: (chunks) => (
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {chunks}
            </span>
          ),
        })}
        description={t('description')}
        buttons={
          <>
            <a className={buttonVariants({ size: 'lg' })} href="sign-up">
              <PlayIcon className="mr-2 size-5" />
              {t('primary_button')}
            </a>

            <a
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
              href="sign-in"
            >
              <LockOpen1Icon className="mr-2 size-5" />
              {t('secondary_button')}
            </a>
          </>
        }
      />
    </Section>
  );
};

export { Hero };
