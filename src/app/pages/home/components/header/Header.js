import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dialogsOperations } from 'appAPI/dialogs';

import { LoginDialog } from 'appComponents/dialogs/auth/login';
import { Button } from 'appComponents/core/button';

import gridStyles from 'appAssets/styles/grid.scss';
import styles from './styles.scss';

import logoImgSrc from './img/logo.svg';

class Header extends Component { 
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        };
    }

    handleClick = () => {
        this.setState({ isActive: !this.state.isActive });
    }

    render() {
        const { isActive } = this.state;
        const { showDialog } = this.props;

        return (
            <div className={styles.header}>
                <div className={gridStyles.containerFluid}>
                    <div className={styles.content}>
                        <a className={styles.logo}>
                            <img src={logoImgSrc} className={styles.img} />
                        </a>
                        <Button className={styles.btn} onClick={() => { showDialog('login'); }}>Войти</Button>
                    </div>
                </div>

                <LoginDialog />
            </div>
        );
    }
}

const mapStateToProps = () => ({

});

const mapDispatchToProps = {
    showDialog: dialogsOperations.showDialog
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);