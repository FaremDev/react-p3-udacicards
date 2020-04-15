import React, { Component, useLayoutEffect } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';
import { royalBlue, white, orange } from '../utils/colors'
import { removeDeck } from '../store/actions'

class DeckDetails extends Component {
    onPressBtnAddCard = () => {
        const { title } = this.props.route.params
        this.props.navigation.navigate('NewQuestion', { title: title })
    }

    onPressBtnShowQuiz = () => {
        this.props.navigation.navigate('Quiz', { title: this.props.route.params.title, questions: this.props.route.params.questions })
    }

    onPressBtnRemoveDeck = () => {
        this.props.dispatch(removeDeck(this.props.route.params.title))
        setTimeout(
            (() => {this.props.navigation.navigate('DeckList')}),
            200
        )

    }

    render() {
        const { title, questions } = this.props.route.params
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.deckTitleText}>{title}</Text>
                    <Text style={styles.cardNumberText}>{questions.length} card{questions.length > 1 ? 's' : ''}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={this.onPressBtnAddCard}>
                        <Text style={styles.textBtn}>Add Card</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.btn} onPress={this.onPressBtnShowQuiz}>
                        <Text style={styles.textBtn}>Start Quiz</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={this.onPressBtnRemoveDeck}>
                        <Text style={styles.textBtn}>Remove Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function DeckDetailsView (props) {
    useLayoutEffect(() => {
        props.navigation.setOptions({
          title: 'Deck ' + props.route.params.title
        });
      });

    return (
        <DeckDetails {...props} />
    )    
}

function mapStateToProps({ deck }) {
    return {
        deck
    }
}

export default connect(mapStateToProps)((props) => {
    const navigation = useNavigation()

    return (<DeckDetailsView {...props} navigation={navigation}/>)
})


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: royalBlue
    },
    titleContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    deckTitleText: {
        fontSize: 50,
        color: white
    },
    cardNumberText: {
        fontSize: 25,
        color: '#EEEEEE',
        fontStyle: 'italic'
    },
    btn: {
        backgroundColor: orange,
        borderRadius: 30,
        paddingRight: 30,
        paddingLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15,
        marginBottom: 15
    },
    textBtn: {
        color: white,
        fontSize: 20,
        fontWeight: 'bold'
    }
  });