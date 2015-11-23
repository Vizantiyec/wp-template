<!DOCTYPE html>
<!--[if IE 7]><html class="ie7"><![endif]-->
<!--[if IE 8]><html class="ie8"><![endif]-->
<!--[if IE 9]><html class="ie9"><![endif]-->
<!--[!(IE)]><!-->
<html><!--<![endif]-->
	<head>
	
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title><?php bloginfo('name') . ' | ' . wp_title(); ?></title>

		<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
		<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
		
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<?php wp_head(); ?>
		
	</head>

	<body <?php body_class(); ?>>

		<!--HEADER-->
		<header class="header">
			<div class="container">
				<div class="row">
					<div class="col-sm-6">
						<div class="logo">
							<a href="<?php echo home_url(); ?>"><img src="<?php bloginfo('template_url'); ?>/img/logo.png" alt="logo"/>Logotype</a>
						</div>
					</div>

					<div class="col-sm-6 text-right">
						<div class="phone-header">
							<img src="<?php bloginfo('template_url'); ?>/img/phone-header.png" alt="">
						</div>
					</div>
				</div>
				
				<nav class="nav" id="nav">
					<?php
						$nav_args = array(
							'theme_location'	=> 'nav',
							'container'			=> ''
						);
						wp_nav_menu( $nav_args );
					?>
				</nav>
			</div>
		</header>