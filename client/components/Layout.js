import React    from "react";
import Header   from "./Header";
import Menu     from "./Menu";
import VMcontrol from "./VMcontrol";
import VMcard   from "./VMcard";
import VMlist   from "./VMlist";
import DragControl   from "./DragControl";



class Layout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <Header />
        <Menu />
        <h1>This is the main layout</h1>
        <VMcontrol />
        <VMcard />
        <VMlist />
        <DragControl />

      </div>
    );
  }
}

export default Layout