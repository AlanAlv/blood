<template>
    <div class="hero-foot column is-4">
                <div class="box">
                    <form action="/register" method="post">
                        <h3 class="subtitle has-text-grey has-text-centered is-large">Registro</h3>
                        <div class="field">
                            <div class="control">
                                <input name="first_name" id="first_name" class="input is-medium is-success" type="text" placeholder="Nombre" autofocus="">
                            </div>
                        </div>
						<div class="field">
                            <div class="control">
                                <input name="last_name" id="last_name" class="input is-medium is-success" type="text" placeholder="Apellido" autofocus="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input name="email" id="email" class="input is-medium is-success" type="email" placeholder="Correo" autofocus="">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input name="password" id="password"class="input is-medium is-warning" type="password" placeholder="Contraseña">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input is-medium is-danger" type="password" placeholder="Verificar contraseña">
                            </div>
                            <p class="help is-success">Las contraseñas coinciden</p>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="address">Direccion</label>
                                <input name="address" id="address" class="input is-medium is-primary" type="text" placeholder="Direccion" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="city">Ciudad</label>
                                <input name="city" id="city" class="input is-medium is-primary" type="text" placeholder="Ciudad" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="country">Pais</label>
                                <input name="country" id="country" class="input is-medium is-primary" type="text" placeholder="Pais" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="telephone">Telefono</label>
                                <input name="telephone" id="telephone" class="input is-medium is-primary" type="number" placeholder="000-000-000" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="cellphone">Celular</label>
                                <input name="cellphone" id="cellphone" class="input is-medium is-primary" type="number" placeholder="000-000-000" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="avatar">Avatar</label>
                                <input name="avatar" id="avatar" class="input is-medium is-primary" type="text" placeholder="Avatar" autofocus="">
                            </div>
                        </div>

						<div class="field">
                            <div class="control">
							<label for="birthdate">Cumpleaños</label>
								<input type="date" class="input is-medium is-primary" name="birthdate" id="birthdate">
                            </div>
                        </div>


                        <div class="field is-grouped is-grouped-centered" >
						  <div class="control is-centered is-offset-4">
						    <div class="select is-medium is-primary is-expanded">
						      <select name="gender" id="gender">
						        <option>Género</option>
						        <option value="true">Masculino</option>
						        <option value="false">Femenino</option>
						      </select>
						    </div>
						</div>

						  
						 <div class="control">
						    <div class="select is-medium is-danger">
						      <select name="bloodType" id="bloodType">
						        <option>Tipo de sangre</option>
						        <option value="0">A+</option>
						        <option value="1">A-</option>
						        <option value="2">O+</option>
						        <option value="3">O-</option>
						        <option value="4">B+</option>
						        <option value="5">B-</option>
						        <option value="6">AB+</option>
						        <option value="7">AB-</option>
						      </select>
						    </div>
						  

						   
						  </div>
						</div>
                        <button class="button is-block is-info is-large is-fullwidth">Registrarse</button>
                         <p class="help is-danger"><a href="">¿Ya tienes una cuenta? Inicia sesion </a></p>

                    </form>
                </div>
            </div>
  
</template>