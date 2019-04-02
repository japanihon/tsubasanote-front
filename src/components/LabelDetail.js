import React from "react";

class LabelDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [{ id: 1, text: "test1" }, { id: 2, text: "text2" }],
            visible_new_form: false,
            new_forms: []
        };
    }

    addForm = () => {
        // const add_form = this.state.add_forms.map(form => {});
        // this.setState({ visible_new_form: !this.state.visible_new_form });
        if (this.state.new_forms.length >= 2) return;
        const add_forms = [
            {
                id: this.state.new_forms.length,
                input_text: `${this.state.new_forms.length}`
            }
        ];
        const update_forms = this.state.new_forms.concat(add_forms);
        this.setState({
            new_forms: update_forms
        });
    };

    render() {
        const form = this.state.forms.map(form => {
            return <li>{form.text}</li>;
        });

        const new_form = this.state.new_forms.map(new_form => {
            return <li>{new_form.input_text}</li>;
        });
        return (
            <div>
                <h1>フォーム追加</h1>
                <button onClick={this.addForm}>
                    {this.state.visible_new_form
                        ? "フォームを消す"
                        : "フォームをだす"}
                </button>
                {new_form}
                {/* {this.state.visible_new_form && <p>フォームだよ</p>} */}
                {form}
                <div />
            </div>
        );
    }
}

export default LabelDetail;
