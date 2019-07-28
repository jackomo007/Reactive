var TaskApp = React.createClass({
    getInitialState: function () {
        return {
            items: [],
            task: ''
        };
    },

    onChange: function (e) {
        var task = e.target.value;

        this.setState({ task });
    },

    addTask: function (e) {
        this.setState({
            items: this.state.items.concat([this.state.task]),
            task: ''
        });

        e.preventDefault();
    },

    removeTask: function (e) {
        e.preventDefault();
        var items = this.state.items;
        items.pop();
        this.setState({ items: items });
    },


    render: function () {
        const divStyle = {
            'margin-top': '5%',
            'margin-left': '30%',
            'margin-rigth': '60%',
            'font-size': '15px',
        };

        const myCard = {
            'position': 'relative',
            'display': '-ms - flexbox',
            'display': 'flex',
            '-ms-flex-direction': 'column',
            'flex-direction': 'column',
            'min-width': '0',
            'word-wrap': 'break-word',
            'background-color': '#fff',
            'background-clip': ' border - box',
            'border': '1px solid rgba(0, 0, 0, .125)',
            'border-radius': '.25rem',
            'width': '500px',
        };

        const botones = {
            'width': 'max-content'
        };

        const input = {
            'margin-bottom': '5px'
        };

        const myBody = {
            'background-color': '#ccc'
        };

        return (
            <div className="row" style={divStyle}>
                <div className="col-lg-10">
                    <div className="card" style={myCard}>
                        <div className="card-body" style={myBody}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h5>Minhas Tarefas:</h5>
                                    <TaskList items={this.state.items} />
                                </div>
                                <div className="col-sm-3">
                                    <div className="row">
                                        <div className="row">
                                            <input onChange={this.onChange} value={this.state.task} style={input} />
                                        </div>
                                        <div className="row" style={botones}>
                                            <i className="material-icons  mano" onClick={this.addTask}>add_circle_outline</i>
                                            <i className="material-icons mano" onClick={this.removeTask}>remove_circle_outline</i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }

});

React.render(<TaskApp />, document.body);