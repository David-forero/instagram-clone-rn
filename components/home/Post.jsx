import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { Feather, Ionicons } from "@expo/vector-icons";

const Post = ({ post }) => {

  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post}/>
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.profile_picture }} style={styles.story} />

      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.user}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "bold" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={{ uri: post.imgURL }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ post }) => (
  <View style={{ flexDirection: "row" }}>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity>
        <Feather name="heart" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginLeft: 15 }}>
        <Ionicons name="chatbubble-outline" size={25} color="white" />
      </TouchableOpacity>

      <TouchableOpacity style={{ marginLeft: 15 }}>
        <Ionicons name="ios-paper-plane-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>

    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <Ionicons name="ios-bookmark-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{marginTop: 5}} >
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);


const CommentsSection = ({post}) => (
    <View style={{marginTop: 5}}>
      {
        !!post.comments.length && (
            <Text style={{color: 'gray'}} >
                View {post.comments.length > 1 ? 'all' : ''} {''}
                {post.comments.length > 1 ? `${post.comments.length} ` : ''}
                {post.comments.length > 1 ? 'comments' : 'comment'}
            </Text>
        )
      }
    </View>
)

const Comments = ({post}) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
                <Text style={{color: 'white'}} >
                    <Text style={{fontWeight: 'bold'}}>{comment.user}</Text> {' '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
});
