import React from 'react';
import { useTranslation } from 'react-i18next';
import { Badge, Button, ButtonToolbar, CardTitle, Table } from 'reactstrap';
import { Card, CardContent } from '@material-ui/core';

const header = [
    { id: 0, title: 'Group' },
    { id: 1, title: 'Sub-Indicator' },
    { id: 2, title: 'Unit' },
    { id: 3, title: 'Baseline' },
    { id: 4, title: 'Target' },
    { id: 5, title: 'Achived' },
    { id: 6, title: 'Y-o-Y' },
];

const rows = [
    {
        group: 1.0,
        sub_indicator: 'Lending in Q1 BRAG ',
        unit: 'UA m',
        baseline: '',
        target: '',
        achived: 'status',
        badge: 'warning',
        yoy: '',
    },
    {
        group: 1.2,
        sub_indicator: 'ADB Sovereign in QI BRAG',
        unit: 'UA m',
        baseline: '',
        target: '',
        achived: 'status',
        badge: 'danger',
        yoy: '',
    },
    {
        group: 1.3,
        sub_indicator: 'ADB Non-Sovereign in QI BRAG',
        unit: 'UA m',
        baseline: '',
        target: '',
        achived: 'status',
        badge: 'success',
        yoy: '',
    },
    {
        group: 1.4,
        sub_indicator: 'Validated PCN for next IOP',
        unit: 'UA m',
        baseline: '',
        target: '',
        achived: 'status',
        badge: 'success',
        yoy: '',
    },
];

const RecentOrders = () => {
    const { t } = useTranslation('common');

    return (
        <div>
            <div className="mt-4 mb-5">
                <Card col="5">
                    <CardContent>
                        <h2> View For</h2>
                        <ButtonToolbar>
                            <Button color="success" className="square">On track</Button>
                            <Button color="warning" className="square">Fairly on track</Button>
                            <Button color="danger" className="square">Off track</Button>
                        </ButtonToolbar>
                    </CardContent>
                </Card>
            </div>
            <Card lg={12}>
                <h2 className="alert alert-success pl-4 mb-5 mt-2">Pipeline and Business Development</h2>
                <Table responsive className="table--bordered">
                    <thead>
                        <tr>
                            <th >Group</th>
                            <th >Sub Indicator</th>
                            <th >Unit</th>
                            <th >Baseline</th>
                            <th >Target</th>
                            <th rowSpan="2">Achived</th>
                            <th >Y-o-Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(item => (
                            <tr key={item.group}>
                                <td>{item.group}</td>
                                <td>{item.sub_indicator}</td>
                                <td>{item.unit}</td>
                                <td>{item.baseline}</td>
                                <td>{item.target}</td>
                                <td><Badge color={item.badge}>{item.achived}</Badge></td>
                                <td>{item.yoy}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>

            <Card lg={12} className="mt-5">
                <h2 className="alert alert-success pl-4 mb-5 mt-2">Development financing operations</h2>
                <Table responsive className="table--bordered">
                    <thead>
                        <tr>
                            <th >Group</th>
                            <th >Sub Indicator</th>
                            <th >Unit</th>
                            <th >Baseline</th>
                            <th >Target</th>
                            <th rowSpan="2">Achived</th>
                            <th >Y-o-Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(item => (
                            <tr key={item.group}>
                                <td>{item.group}</td>
                                <td>{item.sub_indicator}</td>
                                <td>{item.unit}</td>
                                <td>{item.baseline}</td>
                                <td>{item.target}</td>
                                <td><Badge color={item.badge}>{item.achived}</Badge></td>
                                <td>{item.yoy}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>

            <Card lg={12} className="mt-5">
                <h2 className="alert alert-success pl-4 mb-5 mt-2">Resources Mobilization and Donor Coordination</h2>
                <Table responsive className="table--bordered">
                    <thead>
                        <tr>
                            <th >Group</th>
                            <th >Sub Indicator</th>
                            <th >Unit</th>
                            <th >Baseline</th>
                            <th >Target</th>
                            <th rowSpan="2">Achived</th>
                            <th >Y-o-Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(item => (
                            <tr key={item.group}>
                                <td>{item.group}</td>
                                <td>{item.sub_indicator}</td>
                                <td>{item.unit}</td>
                                <td>{item.baseline}</td>
                                <td>{item.target}</td>
                                <td><Badge color={item.badge}>{item.achived}</Badge></td>
                                <td>{item.yoy}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>

            <Card lg={12} className="mt-5">
                <h2 className="alert alert-success pl-4 mb-5 mt-2">Disbursement</h2>
                <Table responsive className="table--bordered">
                    <thead>
                        <tr>
                            <th >Group</th>
                            <th >Sub Indicator</th>
                            <th >Unit</th>
                            <th >Baseline</th>
                            <th >Target</th>
                            <th rowSpan="2">Achived</th>
                            <th >Y-o-Y</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(item => (
                            <tr key={item.group}>
                                <td>{item.group}</td>
                                <td>{item.sub_indicator}</td>
                                <td>{item.unit}</td>
                                <td>{item.baseline}</td>
                                <td>{item.target}</td>
                                <td><Badge color={item.badge}>{item.achived}</Badge></td>
                                <td>{item.yoy}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        </div>
    );
};

export default RecentOrders;
