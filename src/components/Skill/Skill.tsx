import React from "react";
import { View, Text } from "react-native";

import { styles } from "./SkillStyle";

interface SkillProp {
  title: string;
  star: number;
}

export function Skill({ title, star }: SkillProp) {
  const renderStars = (star: number) => {
    let result = [];
    for (let i = 0; i < star; i++) {
      result.push(<Text key={i}>⭐</Text>);
    }
    return result;
  };

  return (
    <View>
      <Text style={styles.text}>
        {title} 
        <Text style={{ flexDirection: "row",}}>{renderStars(star)}</Text>
      </Text>
    </View>
  );
}
