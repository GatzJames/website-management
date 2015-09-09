<div className="form-group">
    <label htmlFor="form-status">Status:</label>
    <div className="switch-button">
        <span className="active" style={switchStyle}/>
        <div className="switch-button-case left" onClick={this.handleLeftClick}><i className="fa fa-link"></i> Online</div>
        <div className="switch-button-case right" onClick={this.handleRightClick}>Offline <i className="fa fa-chain-broken"></i></div>
    </div>
</div>
