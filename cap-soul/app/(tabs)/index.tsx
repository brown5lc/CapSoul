import React, { useState } from 'react';
import {  StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TabTwoScreen: React.FC = () => {

  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [isCollapseda, setIsCollapseda] = useState<boolean>(true);
  return (
    <View style={styles.container}>
      {/* Toggle Button for Collapsible Section */}
      <TouchableOpacity style={styles.toggleButton} onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text style={styles.toggleButtonText}>How To Care For Your Clothes</Text>
      </TouchableOpacity>
      {/* Collapsible Section */}
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Linen:- To maintain your linen garment's longevity, we advise washing it separately in cold
water either by hand or in a gentle cycle in the washing machine. For bulkier linen items
like blazers, it's best to opt for hand washing or professional dry cleaning to preserve their
superior quality. After washing, air dry your garment flat in a shaded area and refrain from
using a tumble dryer. Once fully dried, you can iron or steam your garment if needed,
lightly spritzing with water to relax the fibers and make it easier to remove creases. \n Cotton: To care for your cotton garment, we recommend washing it with like colors in
cold water either by hand or in a gentle machine cycle. Dry your garment flat in the shade
and avoid tumble drying. \n Tencel: For the care of Tencel fabrics, we recommend a cold gentle machine or hand wash.
Do not soak or leave garments wet. Line dry pieces in the shade, and do not tumble dry. Once completely dry, you can warm iron or
steam your garment on the reverse side if needed. Hang your garment for storage to avoid
creasing. \n Wool: To care for your wool, we recommend a cold hand wash with gentle detergent.
Turn inside out before washing and do not soak, bleach or wring. Shape your garment
when wet by smoothing it out to flatten creases, then dry flat in the shade, and avoid
tumble drying. Once completely dry, you can iron or steam your garment if needed. Dry
cleaning is also suitable. Fold your garment for storage to prevent it from stretching. \n Silk: To increase the longevity of your silk garments, dry cleaning is the best method to
care for your luxe silk pieces. A cold hand wash is recommended if you are unable to dry
clean. Use a gentle detergent, avoiding any harsh chemicals. Gently swirl the garment in
the water without wringing or twisting, then rinse thoroughly to remove all soap residue.
Air dry in the shade and avoid contact with direct sunlight. Store silk items in a cool, dry
place. \n Cashmere: To maintain the softness and longevity of cashmere garments, it’s best to
hand wash them in cold water using a mild detergent. Avoid wringing the fabric, as this
can damage the delicate fibers. Instead, gently squeeze out excess water and lay the
garment flat on a towel to air dry, reshaping it if necessary. Refrain from hanging
cashmere pieces, as this can cause stretching. If machine washing is preferred, use a
delicate cycle and place the garment in a mesh laundry bag to minimize friction. Ensure
to avoid using harsh chemicals or bleach. Once dry, store your cashmere items folded
neatly in a cool, dry place, away from direct sunlight and heat sources.\n Wool: To care for your wool, we recommend a cold hand wash with gentle detergent.
Turn inside out before washing and do not soak, bleach or wring. Shape your garment
when wet by smoothing it out to flatten creases, then dry flat in the shade, and avoid
tumble drying. Once completely dry, you can iron or steam your garment if needed. Dry
cleaning is also suitable. Fold your garment for storage to prevent it from stretching.</Text>
        </View>
      </Collapsible>
            {/* Toggle Button for Collapsible Section */}
            <TouchableOpacity style={styles.toggleButtont} onPress={() => setIsCollapseda(!isCollapseda)}>
        <Text style={styles.toggleButtonText}>How To Improve Your Score</Text>
      </TouchableOpacity>
      {/* Collapsible Section */}
      <Collapsible collapsed={isCollapseda}>
        <View style={styles.collapsibleContent}>
          <Text style={styles.collapsibleText}>Ask why you want it:- Some things that we buy are necessities. Some things that we buy, while perhaps frivolous, bring us tons of joy. And some things that we buy quickly turn into regrets that we use just a few times.\n Shopping and returns generate a lot of greenhouse gas emissions and also contribute to landfill. But there are ways you can help. Concerned shoppers can strive to buy less, and when you do, “to hold on to things for longer, reuse things, buy products that have a longer lifespan, and not replace things so often,” said Lorraine Whitmarsh, an environmental psychologist and professor at the University of Bath. Fortunately, those are all actions that also save money. \n Asking yourself a few questions before clicking that buy button can help you avoid over-purchasing for emotional reasons. What need or problem is this thing going to solve? What do you have already that does the job? You can also try visualizing yourself with the thing you want to buy in one, two, or three years. Do you think you’ll still want to wear it, see it, use it? How will it make you feel?</Text>
        </View>
      </Collapsible>
      <Text> </Text>
      <MaterialCommunityIcons name="hanger" size={50} color="#4b6654" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0e5d6',
  },
  title: {
    fontSize: 30,
    marginTop: 10,
    paddingHorizontal:50,
    fontWeight: 'bold',
    position: 'absolute',
    top: 0,
    width: '100%',
    textAlign: 'center',
  },
  circleText: {
    position: 'absolute',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    transform: [{ translateX: -10 }, { translateY: -10 }],
  },
  labelText: {
    position: 'absolute',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: '#f0e5d6',
    borderColor: "black",
    borderWidth: 2,
    padding:2,    
    borderRadius: 5,
    width: 150, 
    
  },
  toggleButton: {
    marginTop: -190,
    backgroundColor: '#4b6654',
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal:12,
    borderRadius: 5,
  },
  toggleButtont: {
    marginTop: 20,
    backgroundColor: '#10732f',
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    paddingHorizontal:20,
    borderRadius: 5,
  },
  toggleButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight:'bold',
  },
  collapsibleContent: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginTop: 10,
  },
  collapsibleText: {
    fontSize: 18,
    textAlign: 'center',
    color:'#2e5909',
  },
});

export default TabTwoScreen;