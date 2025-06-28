// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import '../../assets/styles/Dashboard.scss'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const Dashboard = () => {
    const [ref, inView] = useInView({ triggerOnce: true })

    const data = [
        { name: 'Jan', visitors: 200 },
        { name: 'Feb', visitors: 300 },
        { name: 'Mar', visitors: 400 },
        { name: 'Apr', visitors: 600 },
        { name: 'May', visitors: 500 },
        { name: 'Jun', visitors: 700 },
        { name: 'Jul', visitors: 900 },
    ]

    return (
        <div className="container">
            <div className="admin-layout">
                <motion.div
                    ref={ref}
                    className="grid-wrapper"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="grid-item item-1">1</div>
                    <div className="grid-item item-2">2</div>
                    <div className="grid-item item-3">3</div>
                    <div className="grid-item item-4">4</div>
                    <div className="grid-item item-5">5</div>
                    <div className="grid-item item-6">
                        <div
                            className="card dashboard-card"
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        >
                            <h5 className="card-title ">Visitor Insights</h5>
                            <ResponsiveContainer width="100%" height="80%">
                                <LineChart data={data}>
                                    <XAxis dataKey="name" stroke="#555" />
                                    <YAxis stroke="#555" />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="visitors"
                                        stroke="#00ffc8"
                                        strokeWidth={2}
                                        dot={{ r: 4 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="grid-item item-7">7</div>

                </motion.div>
            </div>
        </div>


    )
}

export default Dashboard
