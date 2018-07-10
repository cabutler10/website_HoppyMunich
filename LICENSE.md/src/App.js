import React, { Component } from "react";
import { MuiThemeProvider } from "material-ui/styles";
import Hidden from "material-ui/Hidden";
import theme from "./theme/MaterialTheme";
import Header from "./screen/header";
import Footer from "./screen/footer";
import Main from "./screen/main";

class App extends Component {
  state = { faq: false };

  handleChangeMain = () => {
    this.setState({ faq: false });
  };

  handleChangeFaq = () => {
    this.setState({ faq: true });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Hidden xsDown>
            <Header
              handleChangeMain={this.handleChangeMain}
              handleChangeFaq={this.handleChangeFaq}
            />
          </Hidden>
          <Main
            handleChangeFaq={this.handleChangeFaq}
            showFaq={this.state.faq}
          />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
