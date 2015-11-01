<div class="row">
	<div class="col m6 s12 offset-m3">
		<div class="card-panel">
			<span class="card-title"><h4>Programas</h4></span>
				<form name="">
				<md-content layout-padding layout="row" layout-sm="column">
				    <md-input-container flex>
				      <label for="nome">Nome</label>
				      <input ng-model="new_programa.nome" id="nome">
				    </md-input-container>
			    </md-content>
			    <md-content layout-padding layout="row" layout-sm="column">
				    <md-input-container flex>
				      <label for="sigla">Sigla</label>
				      <input ng-model="new_programa.sigla" id="sigla">
				    </md-input-container>
			    </md-content>
			    <md-content layout-padding layout="row" layout-sm="column">
			    	<md-input-container flex>
			        	<label for="descricao">Descrição</label>
			        	<textarea ng-model="new_programa.descricao" columns="1" md-maxlength="200" id="descricao"></textarea>
		      		</md-input-container>
			    </md-content>
			    <md-content layout-padding layout="row" layout-sm="column">
			    	<md-button class="md-raised md-primary" ng-click="create()">Salvar</md-button>
			    </md-content>
			    </form>
		</div>
	</div>
</div>