        public int QuFanshu(int[] Mianzi, int[] quPai, int style, int paopai, int con1, int con2)
        {
            int ans = 0;
            if (style == 3)
            {
                ans = 3;
                int[] tempPai = (int[])quPai.Clone();
                //������
                if (ChkDaqixin(tempPai))
                    return 26;
                //����
                if (ChkDachelun(tempPai))
                    return 13;
                //��һɫ
                if (ChkHunyise(tempPai))
                {
                    //��һɫ
                    if (ChkQingyise(tempPai))
                    {
                        ans = ans + 3;
                    }
                    ans = ans + 3;
                }
                //����ͷ
                if (ChkHunlaotou(tempPai))
                    ans = ans + 2;
                //����
                if (ChkDuanyao(tempPai))
                    ans++;
                //����
                ans = ans + tempPai[Dora];
            }
            else if ((style < 3)&&(style>0))
            {
                int[] tempPai = (int[])quPai.Clone();
                ans = 0;
                //����
                if (ChkDachelun(tempPai))
                    return 13;
                //����ϲ
                if (ChkDasixi(tempPai))
                    ans = ans + 2;
                //С��ϲ
                else if (ChkXiaosixi(tempPai))
                    ans++;
                //�İ�����
                if (ChkSiandanji(Mianzi, style))
                    ans = ans + 2;
                //����Ԫ
                if (ChkDasanyuan(tempPai))
                    ans++;
                //����ͷ
                if (ChkQinglaotou(tempPai))
                    ans++;
                //��һɫ
                if (ChkLvyise(tempPai))
                    ans++;
                //��������
                if (ChkJiulian(tempPai))
                {
                    //��������
                    if (ChkChunjiulian(tempPai, paopai))
                        ans = ans + 2;
                    else ans++;
                }
                //���ȸ
                if (ChkHongkongque(tempPai))
                    ans++;
                //����ʯ
                if (ChkBaiwandan(tempPai))
                {
                    //��������
                    if (ChkChunbaiwandan(tempPai))
                        ans = ans + 2;
                    else
                        ans++;
                }
                //�����¸���
                if (ChkDongbeixinganxian(tempPai))
                    ans++;
                if (ans >= 1)
                {
                    ans = ans * 26;
                }
                else
                {
                    ans = 1;
                    //С��Ԫ
                    if (ChkXiaosanyuan(tempPai))
                        ans = ans + 2;
                    //��һɫ
                    if (ChkHunyise(tempPai))
                    {
                        //��һɫ
                        if (ChkQingyise(tempPai))
                        {
                            ans = ans + 3;
                        }
                        ans = ans + 3;
                    }
                    //����ͷ
                    if (ChkHunlaotou(tempPai))
                        ans = ans + 2;
                    //��ȫ��
                    else if (ChkChunquandaiyao(tempPai, Mianzi))
                        ans = ans + 3;
                    //��ȫ��
                    else if (ChkHunquandaiyao(tempPai, Mianzi))
                        ans = ans + 2;
                    //����
                    else if (ChkDuanyao(tempPai))
                        ans++;
                    //��ͬ��
                    if (ChkSantongke(Mianzi))
                        ans = ans + 2;
                    //������
                    if (ChkSananke(tempPai,Mianzi,paopai))
                        ans = ans + 2;
                    //�ԶԺ�
                    if (ChkDuiduihu(Mianzi, style))
                        ans = ans + 2;
                    //��ɫͬ˳
                    else if (ChkSansetongshun(Mianzi))
                        ans = ans + 2;
                    //һ��ͨ��
                    else if (ChkYiqi(Mianzi))
                        ans = ans + 2;
                    //������
                    if (ChkLiangbeikou(Mianzi))
                        ans = ans + 3;
                    //������
                    else if (ChkYibeikou(Mianzi))
                        ans++;
                    //ƽ��
                    if (ChkPinghu(Mianzi, style, paopai))
                        ans++;
                    //����
                    else ans = ans + ChkYipai(Mianzi, ju, (con1 + 4 - Zhuang) % 4);
                    //����  
                    ans = ans + tempPai[Dora];
                    if (ans > 13)
                        ans = 13;
                }
            }
            else if (style==4)
            {
                if (tempPai[paopai] == 2)
                    return 26;
                else return 13;
            }
            return ans;
        }

        public bool ChkDaqixin(int[] Pai)
        {
            for (int i = 0; i < 7; i++)
            {
                if (Pai[i + 27] != 2)
                    return false;
            }
            return true;
        }

        public bool ChkDachelun(int[] Pai)
        {
            for (int i = 0; i < 7; i++)
            {
                if (Pai[i + 19] != 2)
                    return false;
            }
            return true;
        }

        public bool ChkHunyise(int[] Pai)
        {
            int yanse = 0;
            int[] tempPai = (int[])Pai.Clone();
            for (int i = 0; i < 27; i++)
            {
                if (Pai[i] != 0)
                {
                    yanse = i / 9;
                    break;
                }
            }
            for (int i = 0; i < 9; i++)
            {
                tempPai[i + yanse * 9] = 0;
            }
            for (int i = 0; i < 27; i++)
            {
                if (tempPai[i] != 0)
                    return false;
            }
            return true;
        }

        public bool ChkQingyise(int[] Pai)
        {
            if (ChkHunyise(Pai))
            {
                for (int i = 0; i < 7; i++)
                    if (Pai[i + 27] != 0)
                        return false;
                return true;
            }
            else return false;
        }

        public bool ChkHunlaotou(int[] Pai)
        {
            int[] tempPai = (int[])Pai.Clone();
            for (int i = 0; i < 13; i++)
            {
                tempPai[Laotou[i]] = 0;
            }
            for (int i = 0; i < 34; i++)
            {
                if (tempPai[i] != 0)
                    return false;
            }
            return true;
        }

        public bool ChkQinglaotou(int[] Pai)
        {
            if (ChkHunlaotou(Pai))
            {
                for (int i = 0; i < 7; i++)
                    if (Pai[i + 27] != 0)
                        return false;
                return true;
            }
            else return false;
        }

        public bool ChkDuanyao(int[] Pai)
        {
            for (int i = 0; i < 13; i++)
            {
                if (Pai[Laotou[i]] != 0)
                    return false;
            }
            return true;
        }

        public bool ChkDasixi(int[] Pai)
        {
            for (int i = 0; i < 4; i++)
            {
                if (Pai[i+27] != 3)
                    return false;
            }
            return true;
        }

        public bool ChkXiaosixi(int[] Pai)
        {
            int count = 0;
            for (int i = 0; i < 4; i++)
            {
                if (Pai[i+27] <= 3)
                    count = count + Pai[i + 27];
            }
            if (count != 11)
                return false;
            return true;
        }

        public bool ChkSiandanji(int[] Mianzi, int style)
        {
            if (style != 1)
                return false;
            for (int i = 0; i < 4; i++)
            {
                if (Mianzi[i] > 33)
                    return false;
            }
            return true;
        }

        public bool ChkDasanyuan(int[] Pai)
        {
            for (int i = 0; i < 3; i++)
                if (Pai[i + 31] != 3)
                    return false;
            return true;
        }

        public bool ChkXiaosanyuan(int[] Pai)
        {
            int count = 0;
            for (int i = 0; i < 3; i++)
            {
                if (Pai[i + 31] <= 3)
                    count = count + Pai[i + 31];
            }
            if (count != 8)
                return false;
            return true;
        }

        public bool ChkLvyise(int[] Pai)
        {
            int[] tempPai = (int[])Pai.Clone();
            tempPai[19] = 0;
            tempPai[20] = 0;
            tempPai[21] = 0;
            tempPai[23] = 0;
            tempPai[25] = 0;
            tempPai[32] = 0;
            for (int i = 0; i < 34; i++)
                if (tempPai[i] != 0)
                    return false;
            return true;
        }

        public bool ChkJiulian(int[] Pai)
        {
            int yanse = 0;
            for (int i = 0; i < 27; i++)
            {
                if (Pai[i] != 0)
                {
                    yanse = i / 9;
                    break;
                }
            }
            if ((Pai[yanse * 9] < 3) || (Pai[yanse * 9 + 8] < 3))
                return false;
            for (int i = 0; i < 7; i++)
                if (Pai[yanse * 9 + 1 + i] < 1)
                    return false;
            return true;
        }

        public bool ChkChunjiulian(int[] Pai,int paopai)
        {
            if (ChkJiulian(tempPai)&&(Pai[paopai] >= 2))
            {
                if ((paopai % 9 != 0) && (paopai % 9 != 8))
                {
                    return true;
                }
                else if (Pai[paopai] == 4)
                {
                    return true;
                }
                else return false;
            }
            else return false;
        }

        public bool ChkHongkongque(int[] Pai)
        {
            int[] tempPai = (int[])Pai.Clone();
            tempPai[18] = 0;
            tempPai[22] = 0;
            tempPai[24] = 0;
            tempPai[26] = 0;
            tempPai[33] = 0;
            for (int i = 0; i < 34; i++)
                if (tempPai[i] != 0)
                    return false;
            return true;
        }

        public bool ChkBaiwandan(int[] Pai)
        {
            for (int i = 9; i < 34; i++)
                if (Pai[i] != 0)
                    return false;
            int count=0;
            for (int i = 0; i < 8; i++)
            {
                count = count + Pai[i] * (i + 1);
            }
            if (count>=100)
                return true;
            else return false;
        }

        public bool ChkChunbaiwandan(int[] Pai)
        {
            for (int i = 9; i < 34; i++)
                if (Pai[i] != 0)
                    return false;
            int count = 0;
            for (int i = 0; i < 8; i++)
            {
                count = count + Pai[i] * (i + 1);
            }
            if (count == 100)
                return true;
            else return false;
        }

        public bool ChkDongbeixinganxian(int[] Pai)
        {
            for (int i = 18; i < 26; i++)
                if (Pai[i] != 1)
                    return false;
            if ((Pai[27] >= 2) && (Pai[30] >= 2))
                return true;
            else return false;
        }

        public bool ChkHunquandaiyao(int[] Pai, int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i=0;i<13;i++)
                tempMianzi[Laotou[i]] = 0;
            tempMianzi[34] = 0;
            tempMianzi[40] = 0;
            tempMianzi[41] = 0;
            tempMianzi[47] = 0;
            tempMianzi[48] = 0;
            tempMianzi[54] = 0;
            for (int i = 0; i < 55; i++)
            {
                if (tempMianzi[i] != 0)
                    return false;
            }
            int[] huanyuan=QuHuanyuan(Mianzi, 4);
            int[] tempPai = (int[])(Pai.Clone());
            int count = 0;
            for (int i = 0; i < 34; i++)
            {
                tempPai[i] = Pai[i] - huanyuan[i];
            }
            for (int i = 0; i < 13; i++)
            {
                if (Pai[Laotou[i]] == 2)
                    count++;
                else if (Pai[Laotou[i]]!=0)
                    return false;
            }
            if (count != 1)
                return false;
            return true;
        }

        public bool ChkChunquandaiyao(int[] Pai, int[] Mianzi)
        {
            if (ChkHunquandaiyao(Pai, Mianzi))
            {
                for (int i = 0; i < 7; i++)
                    if (Pai[i + 27] != 0)
                        return false;
                return true;
            }
            else return false;
        }

        public bool ChkSantongke(int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 0; i < 9; i++)
            {
                if ((tempMianzi[i] == 1) && (tempMianzi[9 + i] == 1) && (tempMianzi[18 + i] == 1))
                    return true;
            }
            return false;
        }

        public bool ChkSansetongshun(int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 0; i < 7; i++)
            {
                if ((tempMianzi[34+i] >= 1) && (tempMianzi[41 + i] >= 1) && (tempMianzi[48 + i] >= 1))
                    return true;
            }
            return false;
        }

        public bool ChkYiqi(int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 0; i < 3; i++)
            {
                if ((tempMianzi[34 + i * 7] >= 1) && (tempMianzi[37 + i * 7] >= 1) && (tempMianzi[40 + i * 7] >= 1))
                    return true;
            }
            return false;
        }

        public bool ChkYibeikou(int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            int count = 0;
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 34; i < 55; i++)
            {
                if (tempMianzi[i] >= 2)
                    count++;
            }
            if (count == 1)
                return true;
            return false;
        }

        public bool ChkLiangbeikou(int[] Mianzi)
        {
            int[] tempMianzi = new int[55];
            int count = 0;
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 34; i < 55; i++)
            {
                if (tempMianzi[i] >= 2)
                    count++;
            }
            if (count == 2)
                return true;
            return false;
        }

        public bool ChkDuiduihu(int[] Mianzi, int style)
        {
            if (style != 2)
                return false;
            for (int i = 0; i < 4; i++)
            {
                if (Mianzi[i] > 33)
                    return false;
            }
            return true;
        }

        public bool ChkSananke(int[] Pai, int[] Mianzi,int paopai)
        {
            int count = 0;
            for (int i = 0; i < 4; i++)
            {
                if (Mianzi[i] < 34)
                    count++;
            }
            if ((count == 3)&&(Pai[paopai]-1>2))
                return true;
            else return false;
        }

        public bool ChkPinghu(int[] Mianzi, int style, int paopai)
        {
            if (style != 2)
                return false;
            int[] tempMianzi = new int[55];
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 0; i < 4; i++)
            {
                if (Mianzi[i] < 34)
                    return false;
            }
            if (paopai>26)
                return false;
            if (((paopai >= 3) && (paopai <= 5)) || ((paopai >= 12) && (paopai <= 14)) || ((paopai >= 21) && (paopai <= 23)))
            {
                if ((tempMianzi[paopai / 9 * 7 + paopai % 9 - 2 + 34] > 0) || (tempMianzi[paopai / 9 * 7 + paopai % 9 + 34] > 0))
                    return true;
            }
            else if (((paopai >= 0) && (paopai <= 2)) || ((paopai >= 9) && (paopai <= 11)) || ((paopai >= 18) && (paopai <= 20)))
            {
                if (tempMianzi[paopai / 9 * 7 + paopai % 9 + 34] > 0)
                    return true;
            }
            else if (((paopai >= 6) && (paopai <= 8)) || ((paopai >= 15) && (paopai <= 17)) || ((paopai >= 24) && (paopai <= 26)))
            {
                if (tempMianzi[paopai / 9 * 7 + paopai % 9 - 2 + 34] > 0)
                    return true;
            }
            return false;
        }

        public int ChkYipai(int[] Mianzi, int con1, int con2)
        {
            int[] tempMianzi = new int[55];
            int count = 0;
            for (int i = 0; i < 4; i++)
            {
                tempMianzi[Mianzi[i]]++;
            }
            for (int i = 31; i < 34; i++)
            {
                if (tempMianzi[i] == 1)
                    count++;
            }
            if (tempMianzi[con1 / 4 + 27] == 1)
                count++;
            if (tempMianzi[con2 + 27] == 1)
                count++;
            return count;
        }