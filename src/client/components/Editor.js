import React from 'react';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import LangSelector from './controls/LangSelector';
import CodeEditor from './controls/CodeEditor';
import AlertDismissable from './controls/AlertDismissable';
import OutputBox from './controls/OutputBox';
import StatusImage from './controls/StatusImage';
import CompilerApi from '../api/CompilerApi';

let languages = ['JavaScript', 'Python', 'Java', 'C', 'C++'];
const languagesProd = ['JavaScript', 'Python'];

class Editor extends React.Component {
  constructor(props) {
    super(props);

    console.log(('env', process.env.NODE_ENV));
    if (process.env.NODE_ENV === 'production') {
      languages = languagesProd;
    }

    this.state = {
      selectedLang: 0, // JavaScript
      task: {
        lang: 'javascript',
        code: '',
      },
      response: {
        status: '0',
        message: '',
      },
    };

    this.handleRun = this.handleRun.bind(this);
    this.updateSolution = this.updateSolution.bind(this);
    this.handleLangChange = this.handleLangChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  componentDidMount() {
    CompilerApi.getTask('javascript')
      // .then(res => res.json())
      .then((task) => {
        console.log(task);
        this.setState({ task });
      });
  }

  handleCodeChange(code) {
    const { task } = this.state;
    task.code = code;
    console.log(code);
    return this.setState({ task });
  }

  handleRun(event) {
    event.preventDefault();
    const { task } = this.state;
    console.log(task);
    CompilerApi.run(task)
      .then((res) => {
        this.setState({ response: res });
      })
      .catch((error) => {
        console.log(error);
        // this.handleError(error);
      });
  }

  updateSolution(event) {
    // event.preventDefault();
    console.log(this.state.task);
    const field = event.target.name;
    const { task } = this.state;
    task[field] = event.target.value;
    return this.setState({ task });
  }

  handleLangChange(event) {
    const index = parseInt(event.target.value, 10);
    CompilerApi.getTask(languages[index]).then((task) => {
      console.log(task);
      this.setState({ task });
    });
    const response = { status: '0', message: '' };
    this.setState({ response });
    return this.setState({ selectedLang: index });
  }

  render() {
    return (
      <div className="container">
        <Form horizontal>
          <FormGroup controlId="code">
            <Col sm={12}>
              <LangSelector
                langs={languages}
                selectedIndex={this.state.selectedLang}
                onChange={this.handleLangChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="code">
            <Col sm={12}>
              <CodeEditor onChange={this.handleCodeChange} code={this.state.task.code} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={2}>
              <Button bsStyle="primary" type="button" onClick={this.handleRun}>
                Run
              </Button>
              <StatusImage
                hasError={this.state.response.status !== '0'}
                message={this.state.response.message}
              />
            </Col>
            <Col sm={10} />
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <AlertDismissable
                show={this.state.response.status !== '0'}
                message={this.state.response.message}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={12}>
              <OutputBox
                show={this.state.response.status === '0'}
                message={this.state.response.message}
              />
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Editor;
