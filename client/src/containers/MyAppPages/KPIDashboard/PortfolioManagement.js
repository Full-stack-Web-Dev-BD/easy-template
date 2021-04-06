import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ButtonToolbar,
  CardBody, CardTitle, Col, Container, Row,
} from 'reactstrap';
import getTooltipStyles from '@/shared/helpers';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import { Card, CardContent } from '@material-ui/core';
import {
  Bar, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import OccupancyTooltipContent from '../../Dashboards/Booking/components/OccupancyTooltipContent';

const data = [{ value: 50, fill: '#21C36A' }, { value: 50, fill: '#eeeeee' }];
const data2 = [{ value: 30, fill: '#FFC000' }, { value: 70, fill: '#eeeeee' }];
const data3 = [{ value: 20, fill: '#FF2F00' }, { value: 80, fill: '#eeeeee' }];
const data4 = [
  {
    name: 'Mon 10/07',
    uv: 95,
    departure: 75,
    arrival: 10,
  },
  {
    name: 'Tue 11/07',
    uv: 85,
    departure: 23,
    arrival: 65,
  },
  {
    name: 'Wed 12/07',
    uv: 47,
    departure: 26,
    arrival: 45,
  },
  {
    name: 'Thu 13/07',
    uv: 80,
    departure: 25,
    arrival: 45,
  },
  {
    name: 'Fri 14/07',
    uv: 55,
    departure: 35,
    arrival: 15,
  },
  {
    name: 'Sat 15/07',
    uv: 99,
    departure: 30,
    arrival: 40,
  },
  {
    name: 'Sun 16/07',
    uv: 85,
    departure: 48,
    arrival: 26,
  },
];

const data05 = [
  { name: 'N/A :15%  | 40', value: 40, fill: '#4ce1b6' },
  { name: 'ADB Private : 73% | 195', value: 195, fill: '#70bbfd' },
  { name: 'ADB Public :83% | 221', value: 221, fill: '#f6da6e' },
  { name: 'ADF :29% | 79', value: 79, fill: '#ff4861' },
];
const data07 = [
  { name: '% Disbursed', value: 45, fill: '#808080' },
  { name: '% Undisbursed', value: 55, fill: '#21C36A' },
];
const data6 = [{ value: 328, fill: '#59E3E0' }, { value: 268, fill: '#eeeeee' }];

const toPercent = (decimal, fixed = 0) => `${decimal.toFixed(fixed)}%`;

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px',
  position: 'absolute',
};
const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {payload.map(entry => (
      <li key={entry.id}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
    ))}
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const FitnessDashboard = ({ rtl }) => {
  const { t } = useTranslation('common');
  const [coordinate, setCoordinates] = useState({ x: 0, y: 0 });


  return (
    <Container className="dashboard">
      <Card>
        <CardContent>
          <Row>
            <Col xlm={6} md={6}>
              <h3 className="page-title">{t('Portfolio Health and Process Efficiency')}</h3>
            </Col>
          </Row>
          <Row>
            <Col md={12} xl={4} lg={6} sm={12} xs={12} className="dashboard__health-chart-card">
              <div className="dashboard__health-chart">
                <ResponsiveContainer height={180}>
                  <PieChart>
                    <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="dashboard__health-chart-info">
                  <p className="dashboard__health-chart-number">50%</p>
                  <p className="dashboard__health-chart-units">Satisfactory</p>
                </div>
              </div>
            </Col>
            <Col md={12} xl={4} lg={6} sm={12} xs={12} className="dashboard__health-chart-card">
              <div className="dashboard__health-chart">
                <ResponsiveContainer height={180}>
                  <PieChart>
                    <Pie data={data2} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="dashboard__health-chart-info">
                  <p className="dashboard__health-chart-number">30%</p>
                  <p className="dashboard__health-chart-units">Close Watch</p>
                </div>
              </div>
            </Col>
            <Col md={12} xl={4} lg={6} sm={12} xs={12} className="dashboard__health-chart-card">
              <div className="dashboard__health-chart">
                <ResponsiveContainer height={180}>
                  <PieChart>
                    <Pie data={data3} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="dashboard__health-chart-info">
                  <p className="dashboard__health-chart-number">20%</p>
                  <p className="dashboard__health-chart-units">Red flag</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12} xl={12} lg={12} sm={12} xs={12}>
              <ButtonToolbar>
                <Button color="success" className="square">Satisfactory</Button>
                <Button color="warning" className="square">Close Watch</Button>
                <Button color="danger" className="square">Red flag</Button>
              </ButtonToolbar>
            </Col>
            <ResponsiveContainer height={260}>
              <ComposedChart data={data4} margin={{ top: 20, left: -15 }}>
                <XAxis dataKey="name" tickLine={false} padding={{ left: 20 }} />
                <YAxis tickLine={false} tickFormatter={toPercent} />
                <Tooltip content={<OccupancyTooltipContent colorForKey={{ uv: '#555555' }} />} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="uv" name="Stay overs" fill="#f2f4f7" barSize={20} />
                <Line type="linear" name="Departures" dataKey="departure" stroke="#FF3600" />
                <Line type="linear" name="Arrivals" dataKey="arrival" stroke="#FFC000" />
                <Line type="linear" name="Arrival" dataKey="arrival" stroke="#21C36A" />
              </ComposedChart>
            </ResponsiveContainer>
          </Row>
        </CardContent>
      </Card>
      <Card className="mt-5">
        <CardContent>
          <Row>
            <Col xlm={12} md={12}>
              <h3 className="page-title alert alert-success pl-4">{t('Disbursement Performance')}</h3>

              <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--crypto" height={360}>
                <PieChart className="dashboard__chart-pie-container">
                  <Tooltip
                    formatter={value => (`${value.toFixed(0)}%`)}
                    position={coordinate}
                    {...getTooltipStyles('themeName')}
                  />
                  <Pie
                    data={data07}
                    dataKey="value"
                    cy={175}
                    innerRadius={130}
                    outerRadius={160}
                    label={value => (`${value.value.toFixed(0)}%`)}
                  />
                  <Legend layout="horizontal" verticalAlign="left" wrapperStyle={style} content={renderLegend} />
                </PieChart>
              </ResponsiveContainer>
            </Col>

            <Col xlm={12} md={12}>
              <h3>Plan</h3>
              <hr />
              <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--crypto" height={360}>
                <PieChart className="dashboard__chart-pie-container">
                  <Tooltip
                    formatter={value => (`${value.toFixed(0)}`)}
                    position={coordinate}
                    {...getTooltipStyles('themeName')}
                  />
                  <Pie
                    data={data05}
                    dataKey="value"
                    cy={175}
                    innerRadius={130}
                    outerRadius={160}
                    label={value => (`${value.value.toFixed(0)}`)}
                  />
                  <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style} content={renderLegend} />
                </PieChart>
              </ResponsiveContainer>
            </Col>
            <Col md={12} xl={12} lg={12} sm={12} xs={12} className="dashboard__health-chart-card">
              <h3 className="text-left">Actual</h3>
              <hr />
              <div className="dashboard__health-chart">
                <ResponsiveContainer height={180}>
                  <PieChart>
                    <Pie data={data6} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="dashboard__health-chart-info">
                  <p className="dashboard__health-chart-units">Target</p>
                  <h3 className="dashboard__health-chart-units">268</h3>
                  <p className="dashboard__health-chart-units">Actual</p>
                  <p className="dashboard__health-chart-units">328</p>
                </div>
              </div>
            </Col>
          </Row>
        </CardContent>
      </Card>
    </Container>
  );
};

FitnessDashboard.propTypes = {
  rtl: RTLProps.isRequired,
};

export default compose(connect(state => ({
  rtl: state.rtl,
})))(FitnessDashboard);
