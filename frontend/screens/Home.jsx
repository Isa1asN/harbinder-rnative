import {Box} from 'native-base'
import {Text, TouchableOpacity} from 'react-native'
import { AlertDialog } from "native-base";
import { useState } from 'react';

export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (<>
        <TouchableOpacity onPress={()=> setIsOpen(!isOpen)}>
            <Box style={{marginTop:80, backgroundColor:"cyan", width:'50%', alignSelf:'center', alignItems:'center', padding:12, borderRadius:12}} >
                <Text>Home</Text>
            </Box>
        </TouchableOpacity>
        <AlertDialog isOpen={isOpen}>
            <AlertDialog.Content>
                <AlertDialog.CloseButton onPress={()=> setIsOpen(!isOpen)}/>
                <AlertDialog.Header>Alert</AlertDialog.Header>
                <AlertDialog.Body>Are you sure?</AlertDialog.Body>
                <AlertDialog.Footer style={{justifyContent:'space-between'}}>
                    <TouchableOpacity style={{backgroundColor:'gray', padding:8, borderRadius:10}} onPress={()=> setIsOpen(!isOpen)}>
                        <Text>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'red', padding:8, borderRadius:10}} onPress={()=> setIsOpen(!isOpen)}>
                        <Text>Ok</Text>
                    </TouchableOpacity>
                </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>
        </>
    )
}