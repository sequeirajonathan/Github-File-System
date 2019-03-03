import React from 'react';
import ReactDOM from 'react-dom';
import GitContainer from './GitContainer'
import GitRow from './GitRow'
import './index.css';

let files = [
    {
      type: "folder",
      fileName: "build",
      commit: "Close #1687, replace es3ify with Babel ES3 transforms (#1688)",
      uploadTime: "2019-01-27"
    },
    {
      type: "folder",
      fileName: "docs",
      commit: "Mention that we're Observable in the API.",
      uploadTime: "2019-01-28"
    },
    {
      type: "folder",
      fileName: "examples",
      commit: "Update doc to use with Enzyme(#1692)",
      uploadTime: "2019-02-05"
    },
    {
      type: "folder",
      fileName: "logo",
      commit: "Use Redux logo as favicon on Gitbook docs(#1761)",
      uploadTime: "2019-02-08"
    },
    {
      type: "folder",
      fileName: "src",
      commit: "Only warn for unexpected key once per key(#1818)",
      uploadTime: "2018-12-14"
    },
    {
        type: "folder",
        fileName: "test",
        commit: "Only warn for unexpected key once per key(#1818)",
        uploadTime: "2018-12-14"
    },
    {
        type: "file outline",
        fileName: ".babelrc",
        commit: "Close #1687, replace es3ify with Babel ES3 transforms(#1688)",
        uploadTime: "2019-02-18"
    },
    {
        type: "file outline",
        fileName: ".editorconfig",
        commit: "editorconfig: do not trim trailing whitespace in Markdown files",
        uploadTime: "2019-02-19"
    },
    {
        type: "file outline",
        fileName: ".eslintgnore",
        commit: "Really ignore all node_modules and dist in eslint",
        uploadTime: "2019-02-22"
    },
    {
        type: "file outline",
        fileName: ".eslintrc",
        commit: "Bump eslint version",
        uploadTime: "2019-02-25"
    },
    {
        type: "file outline",
        fileName: ".flowconfig",
        commit: "Add Flow type annotation",
        uploadTime: "2019-02-28"
    }
  ];

class App extends React.Component {
    
    render(){
        return(
            <GitContainer>
                {this.props.uploads.map(file => {
                    return(
                    <GitRow 
                    type={file.type}
                    fileName={file.fileName}
                    commit={file.commit}
                    uploadTime={file.uploadTime}
                    />
                    ) 
                })}
                
            </GitContainer>
        )
    }
}

ReactDOM.render(<App uploads={files}/>, document.getElementById('root'));
