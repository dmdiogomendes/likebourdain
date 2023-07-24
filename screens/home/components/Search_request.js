import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles_input from '../styles/Search_request_styles'

const Search_request = (props) => {
  return (
            <ScrollView ref={props.scrollViewRef} style={{flexGrow: 1, paddingBottom: 20, paddingRight: 10, paddingLeft: 10}}>
              <View>
                {props.array_chat.map((x, index) => 
                  <View key={index}>
                    <Text style={styles_input.fonts_main_response}>{x[0]}</Text>
                    <Text style={styles_input.fonts_main_text}>{x[1]}</Text>
                  </View>
                )}
              </View>
              {
                props.array_chat == '' ? 
                <View>
                  <Text style={styles_input.help_questions_title}>Type of questions:</Text>
                  <Text style={styles_input.help_questions}>Cheap places to visit?</Text>
                  <Text style={styles_input.help_questions}>Help me pick 3 countries to do a interrail?</Text>
                  <Text style={styles_input.help_questions}>I am at Madrid, what is the closest hospital?</Text>
                  <Text style={styles_input.help_questions}>I just arrived in Lisbon, what can i visit?</Text>
                  <Text style={styles_input.help_questions}>Tell the story about Paris?</Text>
                  <Text style={styles_input.help_questions}>Typicals food of spain?</Text>
                  <Text> - </Text>
                  <Text style={styles_input.help_questions}>Best Museums to visit in New York City?</Text>
                  <Text style={styles_input.help_questions}>Best beaches to visit in Nice?</Text>
                  <Text style={styles_input.help_questions}>What are the most expensive city in the world?</Text>
                  <Text style={styles_input.help_questions}>Tell the story of Krakow?</Text>
                  <Text style={styles_input.help_questions}>Things to do in Moscow?</Text>
                  <Text style={styles_input.help_questions}>How to plan a trip?</Text>
                  <Text style={styles_input.help_questions}>How to Make Friends When Traveling Solo</Text>
                </View>
                :
                <></>
              }
          </ScrollView>
  )
}

export default Search_request