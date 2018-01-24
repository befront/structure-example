import React, { Component } from 'react';
import { connect } from 'react-redux';

import { dialogsOperations } from 'appAPI/dialogs';

import { Dialog } from 'appComponents/core/dialog';

const DialogHOC = options => (
    (DialogComponent) => {
        class DialogHOC extends Component {
            constructor(props) {
                super(props);

                this.handleClose = this.handleClose.bind(this);
            }

            handleClose() {
                this.props.hideDialog(options.name);
            }
        
            render() {
                const { isActive, title } = this.props;
        
                return (
                    <Dialog
                        isActive={isActive}
                        onClose={this.handleClose}
                        title={title}
                    >
                        <DialogComponent {...this.props} />
                    </Dialog>
                );
            }
        }

        const mapStateToProps = state => ({
            isActive: state.dialogs.shownDialogName === options.name
        });

        const mapDispatchToProps = {
            hideDialog: dialogsOperations.hideDialog,
            showDialog: dialogsOperations.showDialog
        };

        return connect(mapStateToProps, mapDispatchToProps)(DialogHOC);
    }
);

export default DialogHOC;