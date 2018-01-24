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
                this.props.onClose(options.name);
            }
        
            render() {
                const { isActive, onClose, title } = this.props;
        
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
            isActive: state.dialogs.dialogs[options.name]
        });

        const mapDispatchToProps = {
            onClose: dialogsOperations.hideDialog
        };

        return connect(mapStateToProps, mapDispatchToProps)(DialogHOC);
    }
);

export default DialogHOC;