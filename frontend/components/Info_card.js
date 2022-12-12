import { Root, SPSheet } from 'react-native-popup-confirm-toast'

const component = (props) => {
    //hook or class 
    return (<Text>Hi, SekizliPenguen</Text>);
    
    //props.spSheet.hide();
    //props.spSheet.setHeight(150,()=>alert('nice'));
};

<Root>
    <View>
        <TouchableOpacity
            onPress={() => {
                const spSheet = SPSheet;
                spSheet.show({
                    component: () => component({...this.props, spSheet}),
                    dragFromTopOnly: true,
                    onCloseComplete: () => {
                        alert('onCloseComplete');
                    },
                    onOpenComplete: () => {
                        alert('onOpenComplete');
                    },
                    height:260
                });
            }
        >
            <Text>Open Popup Message</Text>
        </TouchableOpacity>
    </View>
</Root>