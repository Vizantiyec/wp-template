		<!--FOOTER-->
		<footer class="footer">
			<div class="container">
				<?php if (has_nav_menu('second')) : ?>
					<div class="footer-menu">
						<?php
							$nav_args = array(
								'theme_location'	=> 'second',
								'container'			=> '',
								'depth'				=> 1
							);
							wp_nav_menu( $nav_args );
						?>
					</div>
				<?php endif; ?>
				<div class="row footer-bottom">
					<div class="col-md-4">
						<div class="copyright">Copyright &copy; <?php echo date("Y"); ?> - <?php bloginfo('name'); ?></div>
					</div>
					<div class="col-md-4 text-center">
						<div class="payments"><img src="<?php bloginfo('template_url'); ?>/img/cards.png" alt=""></div>
					</div>
					<div class="col-md-4 text-right">
						<div class="footer-phone"><img src="<?php bloginfo('template_url'); ?>/img/phone-footer.png" alt=""></div>
					</div>
				</div>
			</div>
		</footer>

		<?php wp_footer(); ?>
		
		<script>
			$(function () {
				ZopimClear(".<?php
					$site_url = get_site_url();
					$find = array( 'http://', 'https://', '/', 'track.' );
					$replace = '';
					$output = str_replace( $find, $replace, $site_url );
					echo $output;
				?>");
			});
		</script>
		
	</body>
</html>