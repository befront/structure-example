import * as React from 'react';
import classNames from 'classnames';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

const links = [
    {
        text: '{twitter}',
        link: '#',
        className: styles.linkTwitter
    },
    {
        text: '{вконтакте}',
        link: '#',
        className: styles.linkVk
    },
    {
        text: '{facebook}',
        link: '#',
        className: styles.linkFacebook
    }
];

const Footer = () => (
    <div className={styles.footer}>
        <div className={gridStyles.containerFluid}>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.copyright}>© befront, 2017</p>
                    <p className={styles.mail}>support@befront.io</p>
                </div>
                <div className={styles.nav}>
                    { links.map((link, index) => (
                        <a
                            key={index}
                            className={classNames(
                                styles.link,
                                { [link.className]: link.className }
                            )}
                        >
                            { link.text }
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default Footer;