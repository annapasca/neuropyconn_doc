Search.setIndex({envversion:46,filenames:["cinq/cinq","ephypype/includeme","ephypype/neuropype_ephy","ephypype/neuropype_ephy.interfaces","ephypype/neuropype_ephy.interfaces.mne","ephypype/neuropype_ephy.nodes","ephypype/neuropype_ephy.pipelines","ephypype/pipelines/nodes/inv_solution","ephypype/pipelines/power","ephypype/pipelines/preproc_meeg","ephypype/pipelines/source_reconstruction","ephypype/pipelines/spectral_connectivity","examples/conn_graph_example","examples/epoch_example","examples/examples","examples/howto","examples/inv_example","examples/params","examples/power_example","examples/preproc_example","graphpype/coclass","graphpype/conmat_to_graph","graphpype/correl_mat","graphpype/graph_stats","graphpype/includeme","graphpype/index","graphpype/intmat_to_graph","graphpype/modularity","graphpype/nii_to_conmat","graphpype/plot_igraph","graphpype/radatools","index"],objects:{"neuropype_ephy.aux_tools":{nostdout:[2,3,1,""],suppress_stdout_stderr:[2,1,1,""]},"neuropype_ephy.compute_fwd_problem":{compute_fwd_sol:[2,3,1,""]},"neuropype_ephy.compute_inv_problem":{compute_ROIs_inv_sol:[2,3,1,""],compute_noise_cov:[2,3,1,""],read_noise_cov:[2,3,1,""]},"neuropype_ephy.fif2ts":{ep2ts:[2,3,1,""]},"neuropype_ephy.import_ctf":{convert_ds_to_raw_fif:[2,3,1,""]},"neuropype_ephy.interfaces":{mne:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne":{Inverse_solution:[4,0,0,"-"],LF_computation:[4,0,0,"-"],power:[4,0,0,"-"],preproc:[4,0,0,"-"],spectral:[4,0,0,"-"]},"neuropype_ephy.interfaces.mne.Inverse_solution":{InverseSolution:[4,1,1,""],NoiseCovariance:[4,1,1,""]},"neuropype_ephy.interfaces.mne.LF_computation":{LFComputation:[4,1,1,""]},"neuropype_ephy.interfaces.mne.power":{Power:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc":{CompIca:[4,1,1,""],CompIcaInputSpec:[4,1,1,""],CompIcaOutputSpec:[4,1,1,""],CreateEp:[4,1,1,""],CreateEpInputSpec:[4,1,1,""],CreateEpOutputSpec:[4,1,1,""],PreprocFif:[4,1,1,""],PreprocFifInputSpec:[4,1,1,""],PreprocFifOutputSpec:[4,1,1,""]},"neuropype_ephy.interfaces.mne.preproc.CompIca":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.CreateEp":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.preproc.PreprocFif":{input_spec:[4,2,1,""],output_spec:[4,2,1,""]},"neuropype_ephy.interfaces.mne.spectral":{PlotSpectralConn:[4,1,1,""],SpectralConn:[4,1,1,""]},"neuropype_ephy.nodes":{import_data:[5,0,0,"-"],ts_tools:[5,0,0,"-"]},"neuropype_ephy.nodes.import_data":{ConvertDs2Fif:[5,1,1,""],ConvertDs2FifInputSpec:[5,1,1,""],ConvertDs2FifOutputSpec:[5,1,1,""],Ep2ts:[5,1,1,""],Ep2tsInputSpec:[5,1,1,""],Ep2tsOutputSpec:[5,1,1,""],ImportBrainVisionAscii:[5,1,1,""],ImportBrainVisionAsciiOutputSpec:[5,1,1,""],ImportMat:[5,1,1,""],ImportMatInputSpec:[5,1,1,""],ImportMatOutputSpec:[5,1,1,""]},"neuropype_ephy.nodes.import_data.ConvertDs2Fif":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.Ep2ts":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ImportBrainVisionAscii":{output_spec:[5,2,1,""]},"neuropype_ephy.nodes.import_data.ImportMat":{input_spec:[5,2,1,""],output_spec:[5,2,1,""]},"neuropype_ephy.nodes.ts_tools":{SplitWindows:[5,1,1,""]},"neuropype_ephy.pipelines":{brain_vision_to_conmat:[6,0,0,"-"],fif_to_inv_sol:[6,0,0,"-"],power:[6,0,0,"-"],preproc_meeg:[6,0,0,"-"],ts_to_conmat:[6,0,0,"-"]},"neuropype_ephy.pipelines.brain_vision_to_conmat":{create_pipeline_brain_vision_ascii_to_spectral_connectivity:[6,3,1,""],create_pipeline_brain_vision_vhdr_to_spectral_connectivity:[6,3,1,""]},"neuropype_ephy.pipelines.fif_to_inv_sol":{create_pipeline_source_reconstruction:[6,3,1,""]},"neuropype_ephy.pipelines.power":{create_pipeline_power:[6,3,1,""]},"neuropype_ephy.pipelines.preproc_meeg":{create_pipeline_preproc_meeg:[6,3,1,""]},"neuropype_ephy.pipelines.ts_to_conmat":{create_pipeline_time_series_to_spectral_connectivity:[6,3,1,""]},"neuropype_ephy.power":{compute_and_save_psd:[2,3,1,""]},"neuropype_ephy.preproc":{compute_ica:[2,3,1,""],create_epochs:[2,3,1,""],create_events:[2,3,1,""],generate_report:[2,3,1,""],preprocess_fif:[2,3,1,""]},"neuropype_graph.interfaces.plot_igraph.plots":{PlotIGraphCoclass:[29,1,1,""],PlotIGraphConjCoclass:[29,1,1,""],PlotIGraphModules:[29,1,1,""]},"neuropype_graph.interfaces.radatools.rada":{NetPropRada:[30,1,1,""],PrepRada:[30,1,1,""]},"neuropype_graph.nodes.coclass":{DiffMatrices:[20,1,1,""],PlotCoclass:[20,1,1,""],PrepareCoclass:[20,1,1,""]},"neuropype_graph.nodes.correl_mat":{ComputeConfCorMat:[22,1,1,""],ConcatTS:[22,1,1,""],ExtractMeanTS:[22,1,1,""],ExtractTS:[22,1,1,""],FindSPMRegressor:[22,1,1,""],IntersectMask:[22,1,1,""],MergeTS:[22,1,1,""],SeparateTS:[22,1,1,""]},"neuropype_graph.nodes.graph_stats":{ShuffleMatrix:[23,1,1,""],SwapLists:[23,1,1,""]},"neuropype_graph.nodes.modularity":{ComputeNetList:[27,1,1,""],ComputeNodeRoles:[27,1,1,""]},"neuropype_graph.pipelines.conmat_to_graph":{create_pipeline_conmat_to_graph_density:[21,3,1,""]},"neuropype_graph.pipelines.intmat_to_graph":{create_pipeline_intmat_to_graph_threshold:[26,3,1,""]},"neuropype_graph.pipelines.nii_to_conmat":{create_pipeline_nii_to_conmat:[28,3,1,""],create_pipeline_nii_to_weighted_conmat:[28,3,1,""]},neuropype_ephy:{aux_tools:[2,0,0,"-"],compute_fwd_problem:[2,0,0,"-"],compute_inv_problem:[2,0,0,"-"],fif2ts:[2,0,0,"-"],import_ctf:[2,0,0,"-"],import_mat:[2,0,0,"-"],import_txt:[2,0,0,"-"],interfaces:[3,0,0,"-"],power:[2,0,0,"-"],preproc:[2,0,0,"-"],spectral:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function"},terms:{"5000e":17,"__main__":[12,15,18,19],"__name__":[12,15,18,19],"_sess_index_":19,"_subject_id_":19,"boolean":[5,6],"class":[2,4,5,20,22,23,27,29,30],"default":[4,5,6,20,22,29],"enum":4,"export":[4,5,6,12],"float":[2,4,6,19,22,27],"function":[1,2,4,6,8,9,10,11,12,15,20,22,27,29,30,31],"import":5,"int":[2,4,5,6],"new":19,"return":[2,4,5,12,15,18,19],"static":15,"true":[2,4,5,6,12,15,17,18,19,21,22,27,28],about:[2,12],accord:[2,4,6,14],achiev:15,activ:2,actual:[],add:[4,15],adjac:6,advanc:31,after:[2,4,14,15,22],again:15,algorithm:[2,9],alia:[4,5],align:[],all:[2,4,5,11,14,15,17,19,22],allow:[2,12,15],alon:31,alpha:17,also:[6,9,11,15],alwai:15,amplitud:[6,11],analys:[2,31],analysi:[1,6,11],analysis_nam:26,analyz:[2,4],ani:15,annapasca:[1,31],anoth:[15,31],aparc:[2,6],appli:[6,17],arg:2,around:22,arrai:2,artefact:[2,9],artifact:[2,6,17],ascii:[5,6],aseg:[2,4,6],aseg_label:[2,4,6],associ:4,atla:[2,4,6],automat:[1,2,6,9,17],aux:2,avail:11,averag:[2,4,6],band:[4,12,15,17],base:[2,4,6,9,11,14,15,31],base_dir:[12,15,18,19],base_directori:[12,15,18,19],basenam:2,befor:[2,4,10,12,15,18,19],beginn:15,behav:5,belong:22,below:[12,15,18,19,22],bem:2,beta:17,between:[5,6,15,19,22],bid:14,bigger:31,binari:22,bold:22,bool:[2,4,5,6,22],brain:[5,14,31],brainpip:11,brainvis:[5,6],brief:15,build:[],cach:15,calcul:2,can:[1,9,10,11,12,14,15,19,31],capit:5,caption:[],cat:30,center:[],centroid:2,chang:15,channel:[6,17,19],channel_coords_fil:[12,15],channel_names_fil:[12,15],channelflag:5,check:6,choic:[2,4,6],choos:5,circular:11,clean:[2,10,19],clear:12,clone:[1,31],coclassif:[20,29],code:[12,15,18,19],coh:[4,6,12,17],coher:11,cohi:[4,12,17],collect:2,color:[12,15,18,19],com:[1,31],command:[30,31],common:31,commonli:31,community_rada:[12,15],compat:1,compica:4,compicainputspec:4,compicaoutputspec:4,compil:2,compon:[6,9,19],comput:[2,4,6,8,9,10,11,12,17,18,22,27],compute_and_save_psd:2,compute_fwd_sol:2,compute_ica:2,compute_noise_cov:2,compute_rois_inv_sol:2,computenetlist:[],computenoderol:[],con_den:[12,15,21],con_method:[4,6,12,15,17],concatenated_run:28,concen:22,condit:22,conf_cor_mat_fil:22,conf_interval_prob:[22,28],confid:22,config:[12,15,18,19],conmat:4,conmat_fil:[4,12,15],conmat_to_graph:[],connect:[6,10],connectivti:[4,11],consid:4,construct:15,contact:[5,6],contain:[2,4,6,22],context:2,continu:2,convert:[2,5,9],convert_ds_to_raw_fif:2,convertds2fif:5,convertds2fifinputspec:5,convertds2fifoutputspec:5,convertor:2,coord:[22,29],coord_rois_fil:22,coordiant:[27,29],coordin:[2,22,29],coords_fil:[12,15,27],coords_rois_fil:22,cor_mat_fil:22,correct:9,correl:11,correl_analysis_nam:[12,15,17],correl_mat:22,correspond:27,cortic:[2,4,6],could:[15,19],coupl:11,cov_filenam:[2,4],cov_fnam:2,cov_fname_in:4,covari:6,covarianca:4,cpu:19,creat:[2,4,6,15,18,19],create_datasourc:[12,15,18,19],create_epoch:[2,4],create_ev:2,create_infosourc:[12,15,18,19],create_main_workflow_pow:18,create_main_workflow_spectral_modular:[12,15],create_noise_cov:10,create_pipeline_brain_vision_ascii_to_spectral_connect:6,create_pipeline_brain_vision_vhdr_to_spectral_connect:6,create_pipeline_conmat_to_graph_dens:11,create_pipeline_intmat_to_graph_threshold:[],create_pipeline_nii_to_conmat:[],create_pipeline_nii_to_weighted_conmat:[],create_pipeline_pow:[6,8,18],create_pipeline_preproc_meeg:[6,9,19],create_pipeline_source_reconstruct:[6,10],create_pipeline_time_series_to_spectral_connect:[6,11,12,15],create_t:[12,15],create_ts_nod:[12,15],create_workflow_preproc:19,createep:4,createepinputspec:4,createepoutputspec:4,creation:15,criteria:2,csf:22,ctf:2,cumul:[6,19],current:[2,11],cut:[6,19],data:[6,8,9,10,11],data_field_nam:5,data_fnam:2,data_path:[12,15,17,18,19],data_typ:[6,17,19],datagrabb:[12,15,18,19],dataset:14,datasourc:[12,15,18,19],datataset:14,davidmeunier79:[1,31],decomposit:9,deep:2,def:[12,15,18,19],defin:[6,10],definit:[4,15],defualt:[4,6],deim:30,delta:17,densiti:[2,4,6,8,18,27],depend:1,deriv:11,desc:[4,5,22,27],dev:1,develop:[1,31],dict:[2,4,6,12,15,17,18,19],dictionari:[2,4,6],differ:[9,11,15,17,31],dipol:10,dir:[9,17],directli:15,directori:[2,4,6,8,9,11,15,17,19],dmalt:31,domain:11,done:6,down_sfreq:[2,6,17,19],download:[1,12,14,15,17,18,19],downloadandinstal:1,downsampl:[2,6,17,19],ds2fif:9,ds_file:2,dspm:[2,4,6],dure:1,each:[5,6,9,10,15,31],easi:31,ecg:[6,17,19],ecg_ch_nam:[2,6,17,19],ecg_evok:2,ecg_ind:2,ecg_scor:2,edu:1,eeg:[2,6,9,31],either:[9,10,15],elec_names_fil:5,electa:5,electrod:[5,6],electrophysiolog:[1,2,31],emploi:2,empti:[2,17],encapsul:15,end:4,engin:[12,15,18,19,31],eog:[6,17,19],eog_ch_nam:[2,6,17,19],eog_evok:2,eog_ind:2,eog_scor:2,ep2t:[2,5],ep2tsinputspec:5,ep2tsoutputspec:5,ep_length:2,ephi:5,ephypyp:1,epo:[2,4,6,18],epoch:[5,6,8,10],epoch_length:2,epoch_window_length:[4,12,15,17],estim:10,etc:15,evelop:11,even:2,event:[2,4,6],events_id:[2,4,6],everi:15,evok:4,exampl:[0,8,9,11],except:2,exclud:[6,9,19],execut:[12,15,18,19],exist:[4,5,15,22,27,31],exit:2,explain:[6,12,19],export_to_matlab:[4,6,12],extern:15,extract:[20,22,23],facilit:31,fals:[2,4,6,12,15,17,18,19,21,22,26,27],far:11,fast:31,field:[],fif:[2,4,5,6,8,9,10,12,15,17,18,19,31],fif_fil:[2,6,18],figur:15,file:[5,9],file_4d:22,filenam:[2,4,6,18,19],fill:6,filter:[6,9],filter_gm_threshold:28,filter_mask:22,filter_mask_fil:22,filter_spectr:6,filter_thr:22,filtered_coords_rois_fil:22,filtered_indexed_rois_fil:22,filtered_labels_rois_fil:22,filtered_mni_coords_rois_fil:22,filtermask:22,fine:9,first:15,fisher:22,flag:9,flexibl:15,flow:15,fmax:[2,6,17,18],fmin:[2,6,17,18],fmri:31,fname:2,focu:31,folder:[2,15],follow:[1,12,15,18,19],format:[2,4,5,6,8,9,10,11,12,17,18,19,20,22,23,27,30,31],fortran:2,forward:[2,4],found:[9,11,12],framework:31,free:15,freq_band:[4,12,15,17],freq_band_nam:[12,15,17],frequenc:[4,6,8,11,12,15,17,18,19],from:[1,5,6,9,10],fruchterman:29,fswiki:1,full:2,furthermor:[15,19],fwd_filenam:[2,4],gamma1:17,gamma2:17,gener:[2,9,15,20,22],generate_report:2,get:[8,9,11,15],get_freq_band:[12,15],git:[1,31],github:[1,31],given:[4,22,30],gomez:30,good:9,good_channels_field_nam:5,grab:[15,19],grad:[6,17],graph2us:[12,15,18,19],graph:11,graph_den_pip:[12,15,21],graph_den_pipe_den_0_05:15,graph_dot_conn2graph:[],graphic:29,grei:22,grid:10,group:29,guid:15,h_freq:[2,6,17,19],had:6,half:29,harvard:1,hash:15,have:[6,15,17,19,20,22,23],heart:[2,9],heog:17,here:[9,15,17],high:[6,19],higher:22,how:[8,9,11],html:[1,19,29],http:[1,29,30,31],ica:[6,9],ico:[4,6],identityinterfac:[12,15,18,19],igraph:29,ijk:22,ijk_coord:22,imag:[14,31],imaginari:11,imcoh:[4,12,17],img:[],implement:[2,8,9,11,18,19,31],importbrainvisionascii:5,importbrainvisionasciioutputspec:5,importmat:5,importmatinputspec:5,importmatoutputspec:5,includ:[2,4,6,9,19,31],independ:5,index:[4,11,12,15,22,25,31],indexed_rois_fil:22,individu:10,infield:[12,15,18,19],info:[12,15,18,19],inform:[1,2,4,31],infosourc:[12,15,18,19],input:[2,4,5,6,8,9,10,11,12,15,18,19,20,22,23,27,29,30,31],input_nam:[12,15],input_spec:[4,5],inputnod:[6,12,15,18,19],inspect:[9,19],install_mne_c:1,instanc:6,instruct:1,int_graph_thr_pip:26,integ:[5,27],interest:[6,15,18,20,22,23],interfac:[],interv:[2,4,6,22],intmat_to_graph:[],intraeeg:[5,6],introduct:15,inv_method:[2,4,6],inv_sol_pipelin:6,inv_solut:10,invers:6,inverse_solut:[],inversesolut:4,ipynb:19,ipynb_report:19,is_epoch:[2,4,6,17,18],is_evok:[2,4,6],is_ica:[6,17],is_sensor_spac:[4,6,12,15],is_set_ica_compon:6,iter:[12,15,18,19],itself:15,jpg:[],jupyt:[9,19],just:[2,15],k_neigh:6,keep:22,kei:6,kept:[4,22],kill:2,kind:[15,17],kit:31,kwarg:[4,5],kwd:2,l_freq:[2,6,17,19],label:[4,15,20,22,23,29],label_coords_fil:2,label_names_fil:2,labels_fil:[2,4,12,15,22],labels_rois_fil:22,lag:11,last:15,later:1,launch:30,lead:[],leadfield:2,learn:1,least:[2,15],leav:17,lego:[6,31],length:2,let:2,letter:5,level:2,lf_comput:[],lfcomput:4,librari:2,line:[4,31],link:[12,14,18,19],linuxinstal:1,list:[5,6,11],load:2,local:19,locat:15,lock:11,lol:27,look:9,low:[6,19],mag:[6,17],main:[6,9],main_path:[6,12,15,17,18,19,21,26,28],main_workflow:[12,15,18,19],mainli:2,manag:2,mandatori:[4,5,22,27],mani:31,manual:1,martino:1,mask:[20,22,23],mat:[5,11],matlab:[5,31],matric:[4,17,20,22,31],matrix:[2,4,5,6,10,11,12,20,21,26,27,28,29],matter:22,max:[4,6,18,20],mayb:31,mean:[20,22,23],mean_masked_ts_fil:22,measur:[11,12,15,17],meg:[2,6,9,12,15,17,18,19,31],meg_data:17,merg:22,method:[2,4,6,8,15,18],metric:4,mgh:1,min:[4,6,18,20],min_bold_intens:22,mix:[2,4,6],mni:22,mni_coord:22,mni_coords_rois_fil:22,mod:[12,15,21,26],modal:31,mode:[6,15],modular:[],more:[1,2,9,31],movement:22,mri:10,mult_regnam:28,multi:[21,31],multi_con:[4,6],multipl:4,multiproc:[12,15,18,19],multitap:[6,8,18],n_comp_exclud:6,n_compon:2,n_fft:2,n_job:2,n_overlap:2,n_proc:[12,15,18,19],n_r:[2,4],n_window:[5,6],name:[2,4,5,6,12,15,17,18,19,22],nb_line:4,ndarrai:5,ndarri:5,necessari:15,need:[10,14,15],net:[27,30],net_list_fil:27,netproprada:[],network:[27,29,30],network_properti:30,neural:10,neuro:31,neurodaddi:25,neuroimag:31,neuropyp:1,nifti:[20,22,23,28],nii:22,nii_to_conmat:[],nii_to_weighted_conmat:28,nio:[12,15,18,19],nipyp:[1,12,15,18,19,31],nmr:1,node:[],nois:6,noise_cov:2,noise_cov_fnam:6,noisecovari:4,non:22,none:[2,4,6,30],normal:[5,22,27],nostdout:2,notebook:[9,19],now:1,npy:[2,4,5,11,22,31],npz:8,number:5,numpi:[1,2,5,22,31],object:15,off:[6,19],omega:[14,17],ongo:2,onli:[1,15,22],open:31,oper:[2,4],optim_seq:[12,15,21],option:[12,20,29],optionn:22,order:15,org:[1,29],organ:14,origin:[2,27],other:[1,15],otherwis:[6,12,17,18,29],our:15,out:6,outfield:[12,15,18,19],outout:6,output:[2,4,5,6,8,9,10,11,15,19,22,27,31],output_nam:[12,15],output_spec:[4,5],over:15,page:[12,25,31],pajek:30,param:[],paramet:[6,9],parameter:15,params_congraph:[12,15],params_ica:[17,19],params_pow:[17,18],parc:[2,4,6],parcel:[2,4,6],particular:[9,10,14,31],partit:27,pass:[18,19],path:6,pattern:15,peak:6,percent:22,percent_sign:22,percentag:[6,19],perform:[2,6,9,10,11,12,15,19],permut:23,phase:11,php:30,pick:2,pickl:22,pip:[1,31],pipeline_nam:[6,21,28],plan:1,pli2_unbias:[4,12,17],pli:[4,12,17],plot:[4,12,15,20,21,22,26,29],plot_circular_connect:[4,6],plot_conmat_fil:4,plot_connectivity_circl:11,plot_fig:22,plot_igraph:[],plot_mat:22,plot_spectr:11,plotigraphcoclass:[],plotigraphconjcoclass:[],plotigraphmodul:[],plotspectralconn:4,plugin:[12,15,18,19],plugin_arg:[12,15,18,19],plv:[4,12,17],point:5,possibl:[2,4,6,9,12,15,17,19,31],power_analysis_nam:[17,18],power_method:[17,18],power_pipelin:17,power_workflow:18,ppc:[4,12,17],pre:2,prepar:23,preprada:[],preproc_pipeline_nam:[17,19],preproc_workflow:19,preprocess:6,preprocess_fif:[2,4],preprocessing_pipelin:17,preprocfif:4,preprocfifinputspec:4,preprocfifoutputspec:4,present:22,previou:15,print:[2,12,15],prior:[],process:[2,31],proj:2,project:[14,31],proper:25,properti:[15,21,26,30],provid:[2,14,15,17,29,31],psd:[6,8],psd_multitap:8,psd_welch:8,put:15,python2:1,python3:1,python:[1,2,4,8,9,10,11,12,15,18,19,31],rada:30,radatool:27,radatools_optim:[12,15,26],rais:2,rang:20,raw:[2,4,5,6,8,9,10,15,18,19,31],raw_fil:[6,12,15,18,19],raw_file_ica:19,raw_file_ica_solut:19,raw_filenam:[2,4],raw_fnam:[12,15],raw_info:[2,4],read:[2,15],read_noise_cov:2,readi:15,recommend:2,reconstruct:6,record:15,redirect:29,region:[2,4,6],registr:14,regress:22,regressor:22,regular:[2,4],reingold:29,reject:[2,6,17],rel:[],relat:[2,9,14],releas:1,remov:[2,6,9,17],remove_unnecessary_output:[12,15,18,19],repair:5,report:[2,6,9,19],repres:15,represent:[4,29],rerun:15,residu:22,respect:8,rest:[12,15,18,19],result:[2,15],retain:22,roi:[2,4,6,22],roi_mask_fil:28,role:27,room:2,rule:9,run:[2,9,12,18,19],run_power_analysi:18,run_preprocess_pipelin:19,run_spectral_modular:[12,15],same:[6,9,22],sampl:[4,5,6,14,17,19],sample_bids_omega:17,sample_s:[5,6],save:[2,4,5,6,9,19],save_stc:[2,4,6],sbj_dir:[2,4,6],sbj_id:[2,4,6],scale:4,scikit:1,scipi:2,score:22,script:[],search:[15,25,31],section:[0,9,12,15,18,19],see:[0,1,8,9,11,12,15,18,19,30,31],segment:2,select:[6,19],sensor:[2,6,8,11,12,15],sep:5,sep_label_nam:[5,6],separ:[5,15],sequenti:15,sergio:30,seri:[2,4,5,6,10,11,19,20,22,23,31],sess_index:[12,15,18,19],session:[6,12,15,17,18,19],set:[6,10],setup:[1,4,6],sever:[5,22],sfreq:[4,6,12,15],should:[1,15],signal:[9,22],simpli:15,sinc:[2,15],size:5,sloreta:[2,4,6],snr:[2,4],solut:6,some:[1,6,11,15],sometim:5,sort_filelist:[12,15,18,19],sotwar:1,sourc:[5,6],space:[2,4,5,6,8,11,12,15,29],spec:5,specif:[4,5,14,15,17],specifi:10,spectral_connect:[11,12],spectral_connectivity_:17,spectral_workflow:[12,15],spectralconn:4,split:[2,5,6],splitted_ts_fil:5,splitwindow:5,spm_reg:28,spontan:2,src:2,stand:31,standard:2,standart:2,start:[2,4,5,10,22],stat:23,stc:[2,4,6],stderr:2,stdout:2,step:10,stop:5,store:[8,9,11,15,17],str:[2,4,6],strang:5,stream:15,string:[4,5,17],structur:[2,5,14,29],sub:[2,4,6,17],subj_coord_rois_fil:22,subj_nam:2,subject:[6,9,10],subject_id:[6,12,15,17,18,19],submodul:[],subsequ:31,substructur:[2,4,6],sudo:1,suppress:2,suppress_stdout_stderr:2,surfer:1,t_max:[2,4,6],t_min:[2,4,6],templat:[10,12,15,18,19],template_arg:[12,15,18,19],tempor:5,tensor:8,test:[12,15],text:5,them:[15,19],therefor:15,theta:17,thi:[2,10,15,22],thing:15,think:2,those:15,thread:31,three:[10,31],threshold:[22,26,27,29],through:2,thu:15,time:[2,4,5,6,10,11,19,20,22,23,31],time_frequ:8,timeseri:[2,22],tmax:4,togeth:31,tool:[15,31],topographi:[6,19],topolog:29,trans_fnam:2,transpos:22,transpose_t:22,trasform:22,trfr:21,trial:5,ts_file:[2,4,5,12,15,22],tsmat_fil:5,tune:9,tupl:5,tutori:9,two:[5,15],txt:[5,6,22],txt_file:5,type:[4,5,6,22,27],underli:[],unsplit:5,urv:30,usedefault:[4,5,22],user:[10,15,31],util:[12,15,18,19],valid:6,valu:[2,4,6,11,20,22,23],variabl:6,varianc:[6,17,19],veog:17,verbos:2,veri:31,vision:5,visual:[11,19],vmax:4,vmin:4,volum:22,voxel:[20,22,23],wai:[15,31],want:[2,4,6,17],websit:14,weight:[22,27,30],weight_fil:22,welch:[2,6,8,17,18],well:[2,4,5,6,12,31],what:4,when:[],where:[2,14,15,17,19,20,22,23,31],whether:22,which:[2,4,6,15,17,18,19,31],white:22,whose:15,why:2,window:5,within:17,without:2,work:1,workflow:[6,8,9,11],wpli2_debias:[4,12,17],wpli:[4,12,17],wrap:[6,8,10,11,29,30,31],write:[8,9,11],write_graph:[12,15,18,19],xor:27,you:1,z_cor_mat_fil:[22,27],zero:22},titles:["CINQ","README","neuropype_ephy","neuropype_ephy.interfaces package","neuropype_ephy.interfaces.mne package","neuropype_ephy.nodes package","neuropype_ephy.pipelines package","Inverse solution Nodes","Power pipeline","Preprocessing pipeline","Source reconstruction pipeline","Connectivity pipeline","Spectral connectivity and graph Workflow","From epoch data to graph theoretical analysis","Examples","How to build a Workflow","Source reconstruction Workflow","params file","PSD Workflow","Preprocessing Workflow","CoClass","conmat_to_graph","Correl Mat","Graph_stats","README :","Welcome to Neuropype_graph&#8217;s documentation!","intmat_to_graph","Modularity","nii_to_conmat","Plot_igraph","Radatools","NeuroPype documentation"],titleterms:{"import":15,analysi:13,aux_tool:2,brain_vision_to_conmat:6,build:15,call:[],cinq:[0,31],coclass:20,compute_fwd_problem:2,compute_inv_problem:2,computeconfcormat:22,computenetlist:27,computenoderol:27,concatt:22,conmat_to_graph:21,connect:[11,12,15,17],content:[3,4],correl:22,covari:7,create_pipeline_conmat_to_graph_dens:21,create_pipeline_intmat_to_graph_threshold:26,create_pipeline_nii_to_conmat:28,create_pipeline_nii_to_weighted_conmat:28,data:13,defin:15,descript:1,diffmatric:20,document:[1,25,31],epoch:13,exampl:[14,31],extractm:22,extractt:22,field:7,fif2t:2,fif_to_inv_sol:6,file:17,filter:17,findspmregressor:22,freesurf:1,from:13,graph:[12,13],graph_stat:23,how:15,ica:17,import_ctf:2,import_data:5,import_mat:2,import_txt:2,indic:[25,31],instal:[1,2,31],interfac:[3,4],intersectmask:22,intmat_to_graph:26,invers:7,inverse_solut:4,lead:7,lf_comput:4,list:17,main:15,mat:22,merget:22,mne:[1,4],modul:[2,3,4,5,6,15],modular:27,netproprada:30,neuropyp:31,neuropype_cli:31,neuropype_ephi:[1,2,3,4,5,6,31],neuropype_graph:[1,25,31],nii_to_conmat:28,node:[5,7,15],nois:7,packag:[1,3,4,5,6,31],param:17,paramet:17,path:17,pipelin:[2,6,8,9,10,11],plot_igraph:29,plotcoclass:20,plotigraphcoclass:29,plotigraphconjcoclass:29,plotigraphmodul:29,power:[2,4,6,8],preparecoclass:20,preprada:30,preproc:[2,4],preproc_meeg:6,preprocess:[9,19],psd:[17,18],radatool:30,readm:[1,24],reconstruct:[10,16],requir:1,run:15,script:14,separatet:22,set:17,shufflematrix:23,softwar:1,solut:7,sourc:[10,16],specifi:15,spectral:[2,4,12],step:15,subject:17,submodul:4,subpackag:[2,3],swaplist:23,tabl:[25,31],theoret:13,ts_to_conmat:6,ts_tool:5,variabl:[15,17],welcom:25,workflow:[12,15,16,18,19]}})