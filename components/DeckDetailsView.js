import React, { Component } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native';


class DeckDetailsView extends Component {
    static propTypes = {
        //deck: PropTypes.object.isRequired
    }

    onPressBtnAddCard = () => {
        const { title, questions } = this.props.route.params
        this.props.navigation.navigate('TabDeck', { screen: 'NewQuestion', params: { title: title, questions: questions } })
    }

    onPressBtnShowQuiz = () => {
        const { title, questions } = this.props.route.params
        this.props.navigation.navigate('Quiz')
    }

    render() {
        console.log(this.props)
        const { title, questions } = this.props.route.params
        return (
            <View>
                <View>
                    <Text>{title}</Text>
                    <Text>{questions.length} card{questions.length > 1 ? 's' : ''}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.onPressBtnAddCard}>
                        <Text>Add Card</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={this.onPressBtnShowQuiz}>
                        <Text>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps({ deck }) {
    return {
        deck
    }
}

export default function(props) {
    const navigation = useNavigation()

    console.log(navigation)

    return <DeckDetailsView {...props} navigation={navigation}/>
}
    //export default connect(mapStateToProps)(DeckDetailsView)