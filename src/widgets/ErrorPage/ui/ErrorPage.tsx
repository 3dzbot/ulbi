import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();

    // eslint-disable-next-line no-restricted-globals
    const reloadPage = () => location.reload();
    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            {t('Something went wrong')}
            <Button onClick={reloadPage}>
                {t('Refresh page')}
            </Button>
        </div>
    );
};
