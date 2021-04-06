import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alerts from '../../../Documentation/04_components/components/Alerts';
import KPIPerformance from '../../../MyAppPages/KPIDashboard/KPIPerformance';
import PortfolioManagement from '../../../MyAppPages/KPIDashboard/PortfolioManagement';

export default () => (
  <Switch>
    <Route exact path="/kpi/portfolio-management" component={PortfolioManagement} />
    <Route exact path="/kpi/kpi-performance" component={KPIPerformance} />
    <Route exact path="/abc" component={Alerts} />
  </Switch>
);
