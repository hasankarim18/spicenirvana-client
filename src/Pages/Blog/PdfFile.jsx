/* eslint-disable react/no-unescaped-entities */
import {

  Document,
  Page,
  View,
  Text,
  StyleSheet
} from "@react-pdf/renderer";


// Create styles
const styles = StyleSheet.create({
  page: {
    display: 'block',
    backgroundColor: '#fff'
  },
  section: {
    margin: 10,
    padding: 10,
    display: "block"
  },
  text:{
    fontSize:12 
  },
  heading:{
    fontSize:18
  }
});


const PdfFile = () => {
  return (
    <Document>
      <Page style={styles.page} wrap={false} size="A4">
        <View style={styles.section}>
          <Text style={styles.heading} >
            1. What is the difference between react controlled component and
            uncontroll component?
          </Text>
        </View>
        <View>
          <Text>
            {" "}
            The main difference between controlled and uncontrolled components
            in React is the way the component's state is managed.
          </Text>
        </View>
        <View>
          <Text>Controlled Components:</Text>
          <Text>
            In a controlled component, the state is managed by the parent
            component through props. The parent component pass value to the
            child component through the props. The child componet is dependent
            on the parent components value or state which is coming to him via
            props
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
