import styled from 'styled-components/native'

export const KeyBoardView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    /* justify-content: center; */
    background-color: #F5F5F5;
`;

export const TextButton = styled.Text`
    text-align: center;
    color: #FFF;
    font-size: 24px;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#fff'
  })`
    background-color: #5D5D86;
    padding: 20px;
    width: 90%;
    height: 70px;
    color: #fff;
    border-radius: 16px;
    margin-bottom: 30px;
    font-size: 24px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
    background-color: #D75F08;
    padding: 20px;
    width: 90%;
    height: 70px;
    color: #fff;
    border-radius: 16px;
    margin-bottom: 30px;
`;