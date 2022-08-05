import React, { useState } from 'react'
import { Row, Col, Button, Input } from 'antd'
import PropTypes from 'prop-types'
import { indexOf } from 'lodash'
import numeral from 'numeral'

let result = 0
let number = 0
let operand = '+'

const Calculator = () => {
  const [screen, setScreen] = useState('')

  const styles = {
    container : {
      border: '1px solid #B4AAA9',
      backgroundColor: '#F0C9B3',
      boxShadow: '5px 5px 5px #B4AAA9',
      margin: 20,
      padding: 16,
      width: 500,
      borderRadius: '16px',
    },
    screen: {
      height: '100px',
      boxShadow: '5px 5px 5px #B4AAA9',
      backgroundColor: '#F8FAFD',
      borderRadius: '16px',
      color: '#B4AAA9',
      fontSize: 36,
    },
  }

  const handleOnClick = (button) => {
    if (indexOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], button) >= 0 ){
      setScreen(screen+button)

      number = numeral(`${screen}${button}`).value()
    }
    
    if (indexOf(['+', '-'], button) >= 0 ){
      operand = button
      calc(button)
      setScreen(button)
    }
    
    if (indexOf(['='], button) >= 0 ){
      calc(operand)

      setScreen(result)
    }

    if (indexOf(['C'], button) >= 0 ){
      setScreen('')

      result = 0
      operand = ''
      number = 0
    }
    
    // eslint-disable-next-line no-console
    console.log('operand, result, number', operand, result, number)
  }

  const calc = (button) => {
    switch (button) {
      case '+' : result += number; break
      case '-' : result += number; break
      default: ;
    }
    
    operand = '+'
    number = 0
  }

  return (
    <div style={styles.container}>
      <Row gutter={[16, 16]} justify='space-evenly'>
        <Col span={24}>
          <Input style={styles.screen} value={screen} disabled/>
        </Col>
        
        <CalculatorButton span={6} onClick={handleOnClick}>1</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>2</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>3</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>+</CalculatorButton>
        
        <CalculatorButton span={6} onClick={handleOnClick}>4</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>5</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>6</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>-</CalculatorButton>
        
        <CalculatorButton span={6} onClick={handleOnClick}>7</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>8</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>9</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>x</CalculatorButton>

        <CalculatorButton span={6} onClick={handleOnClick}>C</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>0</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>=</CalculatorButton>
        <CalculatorButton span={6} onClick={handleOnClick}>%</CalculatorButton>
      </Row>
    </div>
  )
}

const CalculatorButton = (props) => {
  const { span, children, onClick } = props

  const styles = {
    container: {
    },

    button: {
      width: '100%',
      height: '110px',
      fontSize: '48px',
      fontWeight: 'bold',
      backgroundColor: '#FFF0DF',
      borderColor: '#B4AAA9',
      color : '#a0a0a0',
      boxShadow: '0px 5px 5px #777777',
      borderRadius: '16px',
    }
  }

  return (
    <Col span={span} style={styles.container}>
      <Button style={styles.button} onClick={()=>onClick(children)} >
        {children}
      </Button>
    </Col>
  )
}

CalculatorButton.propTypes = {
  span: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
}


CalculatorButton.defaultProps = {
}

export {
  Calculator
} 