// @flow
import React, { Component } from 'react'
import Form from './components/Form'
import Nav from './components/Nav.js'
import styles from './App.scss'

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      form: false
    }
  }

  componentWillMount() {
    const { fetchTicker, fetchBalance } = this.props
    
    fetchTicker()
    fetchBalance()
  }

  render() {
    const {
      ticker,
      balance,
      form,
      setAmount,
      setMessage,
      setPubkey,
      payment,
      peers,
      fetchPeers,
      setCurrency,
      setForm,
      children
    } = this.props

    return (
      <div>
        <Form
          isOpen={form.modalOpen}
          close={() => setForm({ modalOpen: false })}
          setAmount={setAmount}
          setMessage={setMessage}
          setPubkey={setPubkey}
          payment={payment}
          fetchPeers={fetchPeers}
          peers={peers}
          ticker={ticker}
          form={form}
        />
        <Nav 
          ticker={ticker}
          balance={balance}
          setCurrency={setCurrency}
          formClicked={(formType) => setForm({ modalOpen: true, formType })} 
        />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  ticker: React.PropTypes.object,
  children: React.PropTypes.object
}

export default App