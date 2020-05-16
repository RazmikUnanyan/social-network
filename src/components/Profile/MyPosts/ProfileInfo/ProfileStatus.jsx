import React from 'react';
import styles from "./ProfileInfo.module.css";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    activateAditMode =() => {
        this.setState({
            editMode: true
        });

    };
    diactivateAditMode = () => {
        this.setState({
           editMode: false
        });
        this.props.updateStatus(this.state.status);
    };

    onStatusChange =(e) => {
        this.setState({
            status: e.currentTarget.value
        })
    };

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div className={styles.status}>
                {!this.state.editMode &&
                <div>
                    < span onDoubleClick={this.activateAditMode}>{this.props.status || 'статус'}</span> <hr />
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input  onChange={this.onStatusChange}
                            autoFocus={true} onBlur={this.diactivateAditMode}
                            value={this.state.status}/>
                </div>
                }


            </div>)
    }
}

export default ProfileStatus;